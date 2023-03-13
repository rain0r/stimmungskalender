from typing import Any

from django.template.defaulttags import register


@register.filter
def get_item(dictionary: dict, key: str) -> Any:
    try:
        return dictionary.get(key)
    except AttributeError:
        return None


@register.filter
def get_obj_attr(obj: object, attr: str) -> Any:
    try:
        return getattr(obj, attr)
    except AttributeError:
        return None
