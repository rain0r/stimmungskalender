from django.conf import settings
from django.core.handlers.wsgi import WSGIRequest
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
    ss = SettingsService(request.user)
    ret = {}
    for obj in ss.user_colors_settings():
        ret[obj.mood] = obj.color
    return {"mood_colors": ret}


def ng_sk(request: WSGIRequest) -> dict:
    return {"ng_sk_enabled": settings.NG_SK_ENABLED}


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
