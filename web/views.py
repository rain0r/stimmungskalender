from datetime import datetime, timedelta

from django.conf import settings
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.core.exceptions import BadRequest
from django.core.paginator import Paginator
from django.db.models import Q
from django.shortcuts import redirect
from django.urls import reverse, reverse_lazy
from django.utils import formats, timezone
from django.utils.decorators import method_decorator
from django.utils.translation import gettext as _
from django.views import View
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.generic import RedirectView, TemplateView
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

from web.api import serializers
from web.models import Entry, UserSettings, Week, Moods
from web.service.pie_graph import PieGraphService
from web.service.scatter_graph import ScatterGraphService
from web.structs import WeekdayEntry
from web.util import get_default_view_mode

BR_INVALID_REQUEST = "Invalid request."

PER_PAGE = 25
START_DAY_P = "start_day"  # Used to jump between weeks
SK_DATE_FORMAT = "%Y-%W"


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
        context["default_view_mode"] = get_default_view_mode(self.request.user)
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
        self.week_date = self.build_week_date()
        self.my_week, created = Week.objects.get_or_create(
            user=self.request.user, week_date=self.week_date
        )

        context["days_of_week"] = self.get_week_data()
        context["week_date"] = self.week_date
        context["my_week"] = self.my_week
        context["next_week"] = self.get_next_week()
        context["prev_week"] = self.get_prev_week()
        context["moods"] = self.mood_mapping
        context["week_label"] = self.get_week_label()
        context["forms"] = self.get_forms()
        context["start_day"] = self.week_date.strftime(SK_DATE_FORMAT)
        context["standout_data"] = self.get_standout_data()

        return context

    def get_standout_data(self):
        ret = {}
        qs = Entry.objects.filter(user=self.request.user)
        # very good day
        ret["last_very_good_day"] = (
            qs.filter(mood_day=Moods.VERY_GOOD).order_by("-id").first()
        )
        # very good night
        ret["last_very_good_night"] = (
            qs.filter(mood_night=Moods.VERY_GOOD).order_by("-id").first()
        )
        # very bad day
        ret["last_very_bad_day"] = (
            qs.filter(mood_day=Moods.VERY_BAD).order_by("-id").first()
        )
        # very bad night
        ret["last_very_bad_night"] = (
            qs.filter(mood_night=Moods.VERY_BAD).order_by("-id").first()
        )
        return ret

    def build_week_date(self):
        start_day_p = self.request.GET.get(START_DAY_P, "").strip()
        if start_day_p:
            dt1 = datetime.strptime(f"{start_day_p}-1", "%Y-%W-%w")
        else:
            dt1 = timezone.now()
        dt1 += timedelta(days=0 - dt1.weekday())
        return dt1

    def get_week_data(self):
        my_entries = Entry.objects.filter(user=self.request.user, week=self.my_week)
        days = [(self.week_date + timedelta(days=d)).date() for d in range(7)]
        ret = {}
        ret2 = {}
        for day in days:
            ret2[day.strftime("%Y-%m-%d")] = WeekdayEntry(
                weekday=day, mood_day=0, mood_night=0
            )
            ret[day] = {"mood_day": 0, "mood_night": 0}
        for entry in my_entries:
            ret[entry.day] = entry
            ret2[entry.day.strftime("%Y-%m-%d")] = WeekdayEntry(
                weekday=entry.day, mood_day=entry.mood_day, mood_night=entry.mood_night
            )
        return ret2

    def get_start_of_week(self):
        dt1 = self.week_date
        dt1 += timedelta(days=0 - self.week_date.weekday())
        return dt1

    def get_next_week(self):
        ret = self.week_date + timedelta(days=0 - self.week_date.weekday() + 7)
        return ret.strftime(SK_DATE_FORMAT)

    def get_prev_week(self):
        ret = self.week_date + timedelta(days=0 - self.week_date.weekday() - 7)
        return ret.strftime(SK_DATE_FORMAT)

    def build_start_day_date(self):
        param = self.request.GET.get(START_DAY_P)
        return datetime.strptime(param + "-1", "%Y-%W-%w")

    def get_week_label(self):
        start = formats.date_format(
            self.get_start_of_week().date(), "SHORT_DATE_FORMAT"
        )
        end = formats.date_format(
            (self.get_start_of_week() + timedelta(days=7)).date(), "SHORT_DATE_FORMAT"
        )
        return f"{start} — {end}"

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
            raise BadRequest(BR_INVALID_REQUEST)

        if period not in ["day", "night"]:
            raise BadRequest(BR_INVALID_REQUEST)

        data = entry.split("_")
        mood = data[0]

        form_mapping = {
            "night": "mood_night",
            "day": "mood_day",
        }

        # Create related week object
        dt1 = datetime.strptime(data[1], "%Y-%m-%d")
        dt1 += timedelta(days=0 - dt1.weekday())
        my_week, created = Week.objects.get_or_create(
            user=self.request.user, week_date=dt1
        )

        db_data = {"day": data[1], "user": self.request.user, "week": my_week}
        if period == "night":
            db_data["mood_night"] = mood
        elif period == "day":
            db_data["mood_day"] = mood
        else:
            raise BadRequest(BR_INVALID_REQUEST)

        if Entry.objects.filter(**db_data).count() == 1:
            # Click on saved mood: remove it
            Entry.objects.filter(**db_data).update(**{form_mapping[period]: None})
        else:
            Entry.objects.update_or_create(
                day=data[1], week=my_week, user=self.request.user, defaults=db_data
            )
        start_day_p = datetime.strptime(data[1], "%Y-%m-%d").strftime(SK_DATE_FORMAT)
        return redirect(f"{reverse('index')}?{START_DAY_P}={start_day_p}")


@method_decorator(login_required, name="dispatch")
class SaveNoteView(View):
    def post(self, request):
        week = request.POST.get("week", "").strip()
        note = request.POST.get("note", "").strip()

        if not week:
            raise BadRequest(BR_INVALID_REQUEST)

        week_date = datetime.strptime(week, "%Y-%m-%d").date()
        Week.objects.update_or_create(
            week_date=week_date,
            user=self.request.user,
            defaults={
                "week_date": week_date,
                "note": note,
                "user": self.request.user,
            },
        )

        start_day_p = week_date.strftime(SK_DATE_FORMAT)
        return redirect(f"{reverse('index')}?{START_DAY_P}={start_day_p}")


@method_decorator(login_required, name="dispatch")
class JumpToWeekView(View):
    def post(self, request):
        jump_to_date = request.POST.get("jump_to_date", "").strip()
        if not jump_to_date:
            return redirect("index")
        try:
            parsed = datetime.strptime(jump_to_date, "%Y-%m-%d")
        except ValueError:
            return redirect("settings")
        return redirect(
            f"{reverse('index')}?{START_DAY_P}={parsed.strftime(SK_DATE_FORMAT)}"
        )


class GraphView(MoodMapping, TemplateView):
    template_name = "web/graph.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        is_markers = self.is_markers()
        start_dt = self.default_start_dt()
        end_dt = self.default_end_dt()

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

    def default_start_dt(self):
        try:
            start_date = self.request.GET.get("start_date", "")
            start_dt = datetime.strptime(start_date, "%Y-%m-%d")
        except ValueError:
            start_dt = timezone.now() + timedelta(days=-7)
        return start_dt.date()

    def default_end_dt(self):
        try:
            end_date = self.request.GET.get("end_date", "")
            end_dt = datetime.strptime(end_date, "%Y-%m-%d").date()
        except ValueError:
            end_dt = timezone.now().date()
        return end_dt

    def get_first_day(self):
        qs = Entry.objects.filter(user=self.request.user).order_by("day")
        if qs.count() > 0:
            obj = qs.first()
            return obj.day.strftime("%Y-%m-%d")
        return timezone.now().strftime("%Y-%m-%d")

    def is_markers(self):
        if "view" in self.request.GET:
            return self.request.GET.get("view", "markers") == "markers"
        else:
            return get_default_view_mode(self.request.user) == "markers"


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
        paginator = Paginator(self.get_results(), PER_PAGE)
        page = self.request.GET.get("page", 1)
        get_copy = self.request.GET.copy()
        context["results"] = paginator.get_page(page)
        for week in context["results"]:
            week.label = self.get_week_label(week.week_date)

        context["paginator"] = paginator
        context["page_obj"] = paginator.page
        context["parameters"] = get_copy.pop("page", True) and get_copy.urlencode()
        context["moods"] = self.mood_mapping

        return context

    def get_week_label(self, week):
        start = formats.date_format(week, "SHORT_DATE_FORMAT")
        end = formats.date_format((week + timedelta(days=7)), "SHORT_DATE_FORMAT")
        return f"{start} — {end}"

    def get_results(self):
        qs = Week.objects.filter(user=self.request.user).order_by("-week_date")
        qs = self.filter_search(qs)
        qs = self.filter_date(qs)
        qs = self.filter_mood(qs)
        return qs

    def filter_mood(self, qs):
        mood_param = self.request.GET.get("mood", "")
        try:
            mood = int(mood_param)
        except ValueError:
            return qs
        qs = qs.filter(Q(entry__mood_day=mood) | Q(entry__mood_night=mood))
        return qs

    def filter_search(self, qs):
        search_term = self.request.GET.get("search_term", "").strip()
        if search_term:
            qs = qs.filter(note__icontains=search_term)
        return qs

    def filter_date(self, qs):
        start = self.request.GET.get("start_date", "").strip()
        end = self.request.GET.get("end_date", "").strip()

        if start:
            start_dt = datetime.strptime(start, "%Y-%m-%d").date()
            qs = qs.filter(week_date__gte=start_dt)
        if end:
            end_dt = datetime.strptime(end, "%Y-%m-%d").date()
            qs = qs.filter(week_date__lte=end_dt)
        else:
            this_week = timezone.now()
            qs = qs.filter(week_date__lte=this_week)
        return qs


# API views


class EntryViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.EntrySerializer

    def get_queryset(self):
        return Entry.objects.filter(user=self.request.user)


class WeekViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.WeekSerializer

    def get_queryset(self):
        return Week.objects.filter(user=self.request.user)


@api_view()
def api_moods(request):
    return Response(
        {
            1: _("very_bad"),
            2: _("bad"),
            3: _("medium"),
            4: _("good"),
            5: _("very_good"),
        }
    )
