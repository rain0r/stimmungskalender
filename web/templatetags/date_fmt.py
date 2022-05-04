from datetime import timedelta, date

from django.template.defaulttags import register


@register.filter
def week_end_date(date_str: date) -> date:
    return date_str + timedelta(days=7)
