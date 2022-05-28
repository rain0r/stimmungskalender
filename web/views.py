from django.conf import settings
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.core.exceptions import BadRequest
from django.core.paginator import Paginator
from django.shortcuts import redirect
from django.urls import reverse, reverse_lazy
from django.utils.decorators import method_decorator
from django.utils.translation import gettext as _
from django.views import View
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.generic import RedirectView, TemplateView

from web import util, serializers
from web.models import UserSettings, PERIODS
from web.service.pie_graph import PieGraphService, PERIOD_DAY, PERIOD_NIGHT
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
        view_day_form = request.POST.get("view_day_form", "").strip()
        view_night_form = request.POST.get("view_night_form", "").strip()

        if view_is_markers:
            UserSettings.objects.update_or_create(
                user=self.request.user,
                defaults={
                    "user": self.request.user,
                    "view_is_markers": view_is_markers == "markers",
                },
            )

        for period in PERIODS:
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

        start_day_p = self.request.GET.get("start_dt", "").strip()
        context["mood_table"] = sk_service.mood_table(start_day_p)
        context["moods"] = self.mood_mapping
        context["forms"] = self.get_forms()
        context["standout_data"] = sk_service.standout_data()

        return context

    def get_forms(self):
        ret = []
        ret.append(
            {"name": "night", "name_header": "night_header", "attr": PERIOD_NIGHT}
        )
        ret.append({"name": "day", "name_header": "day_header", "attr": PERIOD_DAY})
        return ret


@method_decorator(login_required, name="dispatch")
class SaveMoodView(View):
    def post(self, request):
        entry = request.POST.get("entry", None)
        period = request.POST.get("period", None)

        if not entry or not period:
            raise BadRequest()

        if period not in PERIODS:
            raise BadRequest()

        data = entry.split("_")
        mood = data[0]
        day = data[1]

        sk_service = SkService(self.request.user)
        sk_service.save_entry(period, mood, day)
        return redirect(f"{reverse('index')}?start_dt={day}")


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
        sk_service = SkService(self.request.user)

        context["start_dt"] = start_dt
        context["end_dt"] = end_dt
        context["is_markers"] = is_markers
        context["scatter"] = scatter_graph.build_plot()
        context["pie_chart_day"] = pie_graph.build_chart(PERIOD_DAY)
        context["pie_chart_night"] = pie_graph.build_chart(PERIOD_NIGHT)
        context["graph_time_ranges"] = sk_service.graph_time_ranges()
        return context


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
            start_dt=self.request.GET.get("start_date", ""),
            end_dt=self.request.GET.get("end_date", ""),
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
        return redirect(f"{reverse('index')}?start_dt={start_day_p}")


@method_decorator(login_required, name="dispatch")
class CalendarView(TemplateView):
    template_name = "web/calendar.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        sk_service = SkService(self.request.user)
        serializer = serializers.CalendarSerializer(sk_service.calendar())
        context["serializer"] = serializer.data
        return context
