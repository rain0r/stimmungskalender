from datetime import date

import plotly.graph_objects as go
from django.contrib.auth.models import User
from django.db.models import Avg
from django.utils.translation import gettext_lazy as _
from plotly.offline import plot

from web.service.base_graph import BaseGraph
from web.structs import BarChartResponse


class BarGraphService(BaseGraph):
    def __init__(self, user: User, mood_mapping: dict, start_dt: date, end_dt: date):
        super().__init__(start_dt=start_dt, end_dt=end_dt)
        self.user = user
        self.mood_mapping = mood_mapping

    def build_chart(self) -> str:
        data = self.load_data()
        fig = go.Figure(
            go.Bar(
                marker_color=["#007bff", "#007bff"],
                x=data.labels,
                y=data.values,
            ),
        )
        fig.update_yaxes(range=[1, 5])
        return plot(fig, output_type="div", include_plotlyjs=True)

    def load_data(self) -> BarChartResponse:
        qs = self.date_range_qs().aggregate(Avg("mood_day"), Avg("mood_night"))
        labels = [str(_(x)) for x in ["day", "night"]]
        ret = BarChartResponse(
            labels=labels,
            values=[qs["mood_day__avg"], qs["mood_night__avg"]],
        )
        print(ret)
        return ret
