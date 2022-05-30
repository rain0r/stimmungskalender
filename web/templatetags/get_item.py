from typing import Any

from django.template.defaulttags import register


@register.filter
def get_item(dictionary: dict, key: str) -> Any:
    return dictionary.get(key)


@register.filter
def get_obj_attr(obj: object, attr: str) -> Any:
    return getattr(obj, attr)
