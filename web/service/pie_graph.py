from datetime import date

from django.contrib.auth.models import User
from django.db.models import Count

from web.service.base_graph import PERIODS, BaseGraph
from web.structs import PieChartResponse


class PieGraphService(BaseGraph):
    def __init__(self, user: User, mood_mapping: dict, start_dt: date, end_dt: date):
        super().__init__(start_dt=start_dt, end_dt=end_dt)
        self.user = user
        self.mood_mapping = mood_mapping

    def load_data(self, period: str) -> PieChartResponse:
        if period not in PERIODS:
            raise ValueError(f"period must be one of {PERIODS}")
        qs = (
            self.date_range_qs()
            .values(period)
            .annotate(total=Count(period))
            .order_by("total")
        )
        labels = []
        values = []
        for item in qs:
            if not item[period]:
                continue
            labels.append(item[period])
            values.append(item["total"])
        return PieChartResponse(label_numbers=labels, values=values)
