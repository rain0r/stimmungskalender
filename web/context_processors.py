from django.conf import settings
from django.utils.translation import get_language, to_locale

from web.mood_colors import COLORS


def api_urls(request):
    return {
        "SITE_URL": settings.SITE_URL,
        "API_URLS": {
            "entries": f"{settings.SITE_URL}/api/entries",
            "saveMood": f"{settings.SITE_URL}/save-mood/",
        },
    }


def lang(request):
    return {
        "sk_language_code": get_language().split("-")[0],
        "sk_language": get_language(),
        "sk_locale": to_locale(get_language()),
    }


def mood_colors(request):
    ret = {}
    for color in COLORS:
        ret[int(color)] = COLORS[color]
    return {"MOOD_COLORS": ret}
