from datetime import datetime

from django.conf import settings

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
