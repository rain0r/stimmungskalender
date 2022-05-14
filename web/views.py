from datetime import datetime, timedelta

from django.conf import settings
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.core.exceptions import BadRequest
from django.core.paginator import Paginator
from django.shortcuts import redirect
from django.urls import reverse, reverse_lazy
from django.utils import timezone
from django.utils.decorators import method_decorator
from django.utils.translation import gettext as _
from django.views import View
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.generic import RedirectView, TemplateView

from web import util
from web.models import Entry, UserSettings
from web.service.pie_graph import PieGraphService
from web.service.scatter_graph import ScatterGraphService
from web.service.sk import SkService


class MoodMapping:
    def __init__(self):
        self.mood_mapping = {
            1: _("very_bad"),
            2: _("bad"),
            3: _("medium"),
            4: _("good"),
            5: _("very_good"),
        }


@method_decorator(login_required, name="dispatch")
class SettingsView(TemplateView):
    template_name = "web/settings.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["default_view_mode"] = util.get_default_view_mode(self.request.user)
        context["user_settings"] = UserSettings.objects.get(user=self.request.user)
        return context


@method_decorator(login_required, name="dispatch")
class SaveSettingsView(View):
    def post(self, request):
        view_is_markers = request.POST.get("default_view_mode", "").strip()
        if view_is_markers:
            UserSettings.objects.update_or_create(
                user=self.request.user,
                defaults={
                    "user": self.request.user,
                    "view_is_markers": view_is_markers == "markers",
                },
            )

        for period in ["day", "night"]:
            setting = request.POST.get(f"view_{period}_form", "").strip()
            UserSettings.objects.update_or_create(
                user=self.request.user,
                defaults={
                    "user": self.request.user,
                    f"view_{period}_form": bool(setting),
                },
            )
        return redirect("settings")


@method_decorator(login_required, name="dispatch")
class EntryListView(MoodMapping, TemplateView):
    template_name = "web/index/entry_list.html"

    @method_decorator(ensure_csrf_cookie)
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        sk_service = SkService(self.request.user)

        start_day_p = self.request.GET.get(settings.QS_START_DAY, "").strip()
        context["mood_table"] = sk_service.mood_table(start_day_p)
        context["moods"] = self.mood_mapping
        context["forms"] = self.get_forms()
        context["standout_data"] = sk_service.standout_data()

        return context

    def get_forms(self):
        ret = []
        ret.append(
            {"name": "night", "name_header": "night_header", "attr": "mood_night"}
        )
        ret.append({"name": "day", "name_header": "day_header", "attr": "mood_day"})
        return ret


@method_decorator(login_required, name="dispatch")
class SaveMoodView(View):
    def post(self, request):
        entry = request.POST.get("entry", None)
        period = request.POST.get("period", None)

        if not entry or not period:
            raise BadRequest()

        if period not in ["day", "night"]:
            raise BadRequest()

        data = entry.split("_")
        mood = data[0]
        day = data[1]

        sk_service = SkService(self.request.user)
        sk_service.set_entry(period, mood, day)
        start_day_p = datetime.strptime(day, "%Y-%m-%d").strftime(
            settings.SK_DATE_FORMAT
        )
        return redirect(f"{reverse('index')}?{settings.QS_START_DAY}={start_day_p}")


class GraphView(MoodMapping, TemplateView):
    template_name = "web/graph.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        is_markers = util.is_markers(self.request)
        start_dt = util.default_start_dt(self.request)
        end_dt = util.default_end_dt(self.request)

        scatter_graph = ScatterGraphService(
            is_markers=is_markers,
            mood_mapping=self.mood_mapping,
            user=self.request.user,
            start_dt=start_dt,
            end_dt=end_dt,
        )
        pie_graph = PieGraphService(
            user=self.request.user,
            mood_mapping=self.mood_mapping,
            start_dt=start_dt,
            end_dt=end_dt,
        )
        context["start_dt"] = start_dt
        context["end_dt"] = end_dt
        context["is_markers"] = is_markers
        context["graph"] = scatter_graph.build_plot()
        context["pie_chart_day"] = pie_graph.build_chart("mood_day")
        context["pie_chart_night"] = pie_graph.build_chart("mood_night")
        context["first_day"] = self.get_first_day()
        context["last_week_start_date"] = (
            timezone.now() + timedelta(days=-7)
        ).strftime("%Y-%m-%d")
        context["last_month_start_date"] = (
            timezone.now() + timedelta(days=-30)
        ).strftime("%Y-%m-%d")
        context["last_year_start_date"] = (
            timezone.now() + timedelta(days=-365)
        ).strftime("%Y-%m-%d")
        context["today"] = timezone.now().strftime("%Y-%m-%d")

        return context

    def get_first_day(self):
        qs = Entry.objects.filter(user=self.request.user).order_by("day")
        if qs.count() > 0:
            obj = qs.first()
            return obj.day.strftime("%Y-%m-%d")
        return timezone.now().strftime("%Y-%m-%d")


@method_decorator(login_required, name="dispatch")
class LogoutView(RedirectView):
    permanent = False
    url = reverse_lazy("login")

    def get(self, request, *args, **kwargs):
        logout(request)
        return super(LogoutView, self).get(request, *args, **kwargs)

    def dispatch(self, *args, **kwargs):
        return super(LogoutView, self).dispatch(*args, **kwargs)


@method_decorator(login_required, name="dispatch")
class SearchView(MoodMapping, TemplateView):
    template_name = "web/search.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        sk_service = SkService(self.request.user)
        results = sk_service.search(
            mood=self.request.GET.get("mood", ""),
            search_term=self.request.GET.get("search_term", ""),
            start_date=self.request.GET.get("start_date", ""),
            end_date=self.request.GET.get("end_date", ""),
        )
        paginator = Paginator(results, settings.PER_PAGE)
        page = self.request.GET.get("page", 1)
        get_copy = self.request.GET.copy()
        context["results"] = paginator.get_page(page)
        context["paginator"] = paginator
        context["page_obj"] = paginator.page
        context["parameters"] = get_copy.pop("page", True) and get_copy.urlencode()
        context["moods"] = self.mood_mapping

        return context


@method_decorator(login_required, name="dispatch")
class SaveNoteView(View):
    def post(self, request):
        week = request.POST.get("week", "").strip()
        note = request.POST.get("note", "").strip()

        if not week:
            raise BadRequest()

        sk_service = SkService(self.request.user)
        week = sk_service.save_note(week, note)
        start_day_p = week.week_date.strftime(settings.SK_DATE_FORMAT)
        return redirect(f"{reverse('index')}?{settings.QS_START_DAY}={start_day_p}")
