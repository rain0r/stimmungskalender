from datetime import date

import plotly.graph_objects as go
from django.contrib.auth.models import User
from django.db.models import Avg
from django.utils.translation import gettext_lazy as _
from plotly.offline import plot

from web.service.base_graph import BaseGraph


class BarGraphService(BaseGraph):
    def __init__(self, user: User, mood_mapping: dict, start_dt: date, end_dt: date):
        super().__init__(start_dt=start_dt, end_dt=end_dt)
        self.user = user
        self.mood_mapping = mood_mapping

    def build_chart(self):
        qs = self.date_range_qs().aggregate(Avg("mood_day"), Avg("mood_night"))
        labels = [str(_(x)) for x in ["day", "night"]]
        fig = go.Figure(
            go.Bar(
                marker_color=["#007bff", "#007bff"],
                x=labels,
                y=[qs["mood_day__avg"], qs["mood_night__avg"]],
            ),
        )
        fig.update_yaxes(range=[1, 5])
        return plot(fig, output_type="div", include_plotlyjs=True)
