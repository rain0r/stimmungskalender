from abc import ABC
from datetime import date

from django.db.models import QuerySet
from django.utils import timezone

from web.models import Entry


class BaseGraph(ABC):
    def __init__(self, start_dt: date, end_dt: date, **kwargs):
        self.user = None
        self.start_dt = start_dt
        self.end_dt = end_dt

    def build_day_range(self, start_dt: date, end_dt: date) -> int:
        if start_dt:
            return (end_dt - start_dt).days
        else:
            entry = Entry.objects.filter(user=self.user).first()
            days = (entry.day - timezone.now().date()).days
            return abs(days)

    def date_range_qs(self) -> QuerySet:
        qs = Entry.objects.filter(user=self.user)
        if self.start_dt:
            qs = qs.filter(day__gte=self.start_dt)
            if self.end_dt:
                qs = qs.filter(day__lte=self.end_dt)
        return qs
