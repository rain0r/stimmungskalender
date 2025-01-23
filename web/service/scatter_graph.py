import typing
from datetime import date, timedelta

from django.contrib.auth.models import User

from web.service.base_graph import BaseGraph
from web.structs import ScatterGraphDataPointY, ScatterGraphResponse


class ScatterGraphService(BaseGraph):
    def __init__(
        self,
        is_markers: bool,
        mood_mapping: dict,
        user: User,
        start_dt: date,
        end_dt: date,
    ):
        super().__init__(start_dt=start_dt, end_dt=end_dt)
        self.is_markers = is_markers
        self.mood_mapping = mood_mapping
        self.user = user

    def load_data(self) -> typing.List[ScatterGraphResponse]:
        """
        Loads data from the last seven days if no dates are provided
        """
        data = {}
        day_count = self.build_day_range(self.start_dt, self.end_dt)
        days = [(self.start_dt + timedelta(days=d)) for d in range(day_count)]
        for day in days:
            data[day] = ScatterGraphDataPointY(day=0, night=0)
        entries = self.date_range_qs()
        for entry in entries.iterator():
            data[entry.day] = ScatterGraphDataPointY(
                day=entry.mood_day, night=entry.mood_night
            )
        ret = []
        for day in days:
            ret.append(ScatterGraphResponse(x=day, y=data[day]))
        return ret
