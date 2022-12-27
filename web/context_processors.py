from django.core.handlers.wsgi import WSGIRequest
from django.urls import resolve
from django.urls import reverse_lazy
from django.utils.translation import get_language, to_locale
from django.utils.translation import gettext as _

from web.service.settings import SettingsService


def lang(request: WSGIRequest) -> dict:
    return {
        "sk_language_code": get_language().split("-")[0],
        "sk_language": get_language(),
        "sk_locale": to_locale(get_language()),
    }


def mood_colors(request: WSGIRequest) -> dict:
    ret = {}
    if request.user.is_authenticated:
        ss = SettingsService(request.user)
        for obj in ss.user_colors_settings():
            ret[obj.mood] = obj.color
    return {"mood_colors": ret}


def mood_names(request: WSGIRequest) -> dict:
    return {
        "mood_names": {
            1: _("very_bad"),
            2: _("bad"),
            3: _("medium"),
            4: _("good"),
            5: _("very_good"),
        }
    }


def api_urls(request: WSGIRequest) -> dict:
    """
    Provide urls to api endpoints.
    :param request:
    :return:
    """
    return {
        "api_urls": {
            "base-url": reverse_lazy("index"),
            "api-entry-day": reverse_lazy("api-entry-day"),
            "api-mood-table": reverse_lazy("api-mood-table"),
            "api-calendar": reverse_lazy("api-calendar"),
        }
    }


def active_url(request: WSGIRequest) -> dict:
    current_url = resolve(request.path_info).url_name
    return {"active_url": current_url}
