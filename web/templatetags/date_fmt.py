from datetime import timedelta, datetime, date

from django.template.defaulttags import register
from django.utils import formats


@register.filter
def week_end_date(date_str: date) -> date:
    return date_str + timedelta(days=7)
