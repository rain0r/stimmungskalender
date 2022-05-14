from datetime import datetime, date, timedelta

from django.conf import settings
from django.utils import timezone

from web.models import UserSettings


def date_for_year_week(week, year=2021):
    return datetime.strptime(f"{year}-{week}-1", "%Y-%W-%w")


def get_default_view_mode(username):
    try:
        obj = UserSettings.objects.get(user=username)
        if obj.view_is_markers:
            return "markers"
        else:
            return "lines"
    except UserSettings.DoesNotExist:
        return settings.DEFAULT_VIEW_MODE


def is_markers(request):
    if "view" in request.GET:
        return request.GET.get("view", "markers") == "markers"
    else:
        return get_default_view_mode(request.user) == "markers"


def default_start_dt(request) -> date:
    try:
        start_date = request.GET.get("start_date", "")
        start_dt = datetime.strptime(start_date, "%Y-%m-%d")
    except ValueError:
        start_dt = timezone.now() + timedelta(days=-7)
    return start_dt.date()


def default_end_dt(request) -> date:
    try:
        end_date = request.GET.get("end_date", "")
        end_dt = datetime.strptime(end_date, "%Y-%m-%d").date()
    except ValueError:
        end_dt = timezone.now().date()
    return end_dt
