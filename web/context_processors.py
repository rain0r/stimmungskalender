from django.conf import settings
from django.core.handlers.wsgi import WSGIRequest
from django.utils.translation import get_language, to_locale

from web.mood_colors import COLORS


def lang(request: WSGIRequest) -> dict:
    return {
        "sk_language_code": get_language().split("-")[0],
        "sk_language": get_language(),
        "sk_locale": to_locale(get_language()),
    }


def mood_colors(request: WSGIRequest) -> dict:
    ret = {}
    for color in COLORS:
        ret[int(color)] = COLORS[color]
    return {"MOOD_COLORS": ret}


def ng_sk(request: WSGIRequest) -> dict:
    return {"ng_sk_enabled": settings.NG_SK_ENABLED}
