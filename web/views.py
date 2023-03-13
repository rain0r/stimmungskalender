import sys
import typing
from datetime import date, datetime, timedelta

import pkg_resources
from django.conf import settings
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.core.exceptions import BadRequest
from django.core.paginator import Paginator
from django.http import HttpResponseNotFound
from django.shortcuts import redirect
from django.template import loader
from django.urls import reverse_lazy
from django.utils import timezone
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.generic import RedirectView, TemplateView

from web.models import PERIODS
from web.query_params import QP_END_DT, QP_MOOD, QP_PAGE, QP_SEARCH_TERM, QP_START_DT
from web.service.base_graph import PERIOD_DAY, PERIOD_NIGHT
from web.service.settings import SettingsService
from web.service.sk import SkService


def custom_page_not_found_view(request, exception):
    context = {
        "request": request,
    }
    t = loader.get_template("web/errors/404.html")
    return HttpResponseNotFound(t.render(context))


def custom_error_view(request, exception=None):
    type_, value, traceback = sys.exc_info()
    context = {
        "request": request,
        "exception": exception,
        "type_": str(type_),
    }
    t = loader.get_template("web/errors/500.html")
    return HttpResponseNotFound(t.render(context))


def custom_permission_denied_view(request, exception=None):
    context = {
        "request": request,
    }
    t = loader.get_template("web/errors/403.html")
    return HttpResponseNotFound(t.render(context))


def custom_bad_request_view(request, exception=None):
    context = {
        "request": request,
    }
    t = loader.get_template("web/errors/400.html")
    return HttpResponseNotFound(t.render(context))


class DefaultDateHandler:
    def default_start_dt(
        self,
    ) -> date:
        try:
            start_date = self.request.GET.get(QP_START_DT, "")
            start_dt = datetime.strptime(start_date, "%Y-%m-%d")
        except ValueError:
            start_dt = timezone.now() + timedelta(days=-7)
        return start_dt.date()

    def default_end_dt(self) -> date:
        try:
            end_date = self.request.GET.get(QP_END_DT, "")
            end_dt = datetime.strptime(end_date, "%Y-%m-%d").date()
        except ValueError:
            end_dt = timezone.now().date()
        return end_dt


@method_decorator(login_required, name="dispatch")
class SettingsView(TemplateView):
    template_name = "web/settings/settings.html"

    def get_context_data(self, **kwargs):
        ss = SettingsService(self.request.user)
        sk_version = pkg_resources.get_distribution("stimmungskalender").version

        context = super().get_context_data(**kwargs)
        context["default_view_mode"] = ss.get_default_view_mode()
        context["user_settings"] = ss.user_settings()
        context["user_colors_settings"] = ss.user_colors_settings()
        context["version"] = sk_version
        return context


@method_decorator(login_required, name="dispatch")
class SaveSettingsView(View):
    def post(self, request):
        ss = SettingsService(self.request.user)
        # If day and night form should be displayed
        view_day_form = request.POST.get("view_day_form", "")
        view_night_form = request.POST.get("view_night_form", "")
        ss.set_forms_displayed(day=view_day_form == "on", night=view_night_form == "on")

        # Set markers / lines
        view_mode = request.POST.get("default_view_mode", "")
        ss.set_markers(view_mode)

        # Reset / set custom mood colors
        reset = bool(request.POST.get("reset", False))
        if reset:
            ss.save_user_colors_settings()
        else:
            ss.save_user_colors_settings(request.POST.dict())

        # Set js_btn enabled / disabled
        use_js_btn = request.POST.get("use_js_btn", "")
        ss.set_use_js_btn(use_js_btn == "on")

        return redirect("settings")


@method_decorator(login_required, name="dispatch")
class EntryListView(TemplateView):
    """
    The home page, displays the day and night form.
    """

    template_name = "web/mood-form/entry_list.html"

    @method_decorator(ensure_csrf_cookie)
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        sk_service = SkService(self.request.user)

        ss = SettingsService(self.request.user)

        start_day_p = self.request.GET.get(QP_START_DT, "").strip()
        context["mood_table"] = sk_service.mood_table(start_day_p)
        context["moods"] = sk_service.mood_mapping
        context["forms"] = self.get_forms()
        context["standout_data"] = sk_service.standout_data()
        context["general_stats"] = sk_service.general_stats()
        context["js_btn"] = ss.is_use_js_btn()

        return context

    def get_forms(self) -> typing.List[dict]:
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
        start_day_p = datetime.strptime(day, "%Y-%m-%d").strftime(
            settings.SK_DATE_FORMAT
        )
        return redirect(f"{reverse_lazy('index')}?start_dt={start_day_p}")


class GraphView(DefaultDateHandler, TemplateView):
    template_name = "web/graph/graph.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        ss = SettingsService(self.request.user)
        is_markers = ss.is_markers(self.request.GET)
        start_dt = self.default_start_dt()
        end_dt = self.default_end_dt()
        sk_service = SkService(self.request.user)

        context["start_dt"] = start_dt
        context["end_dt"] = end_dt
        context["is_markers"] = is_markers
        context["graph_time_ranges"] = sk_service.graph_time_ranges()
        context["mood_mapping"] = sk_service.mood_mapping
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
class SearchView(TemplateView):
    template_name = "web/search/search.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        sk_service = SkService(self.request.user)
        results = sk_service.search(
            mood=self.request.GET.get(QP_MOOD, ""),
            search_term=self.request.GET.get(QP_SEARCH_TERM, ""),
            start_dt=self.request.GET.get(QP_START_DT, ""),
            end_dt=self.request.GET.get(QP_END_DT, ""),
        )
        paginator = Paginator(results, settings.PER_PAGE)
        page = self.request.GET.get(QP_PAGE, 1)
        get_copy = self.request.GET.copy()
        context["results"] = paginator.get_page(page)
        context["paginator"] = paginator
        context["page_obj"] = paginator.page
        context["parameters"] = get_copy.pop(QP_PAGE, True) and get_copy.urlencode()
        context["moods"] = sk_service.mood_mapping

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
        return redirect(f"{reverse_lazy('index')}?{QP_START_DT}={start_day_p}")


@method_decorator(login_required, name="dispatch")
class CalendarView(TemplateView):
    template_name = "web/calendar/calendar.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["mood_mapping"] = SkService(self.request.user).mood_mapping
        context["site_url"] = reverse_lazy("index")
        return context
