from datetime import date

import plotly.graph_objs as go
from django.db.models import Count
from django.utils.translation import gettext as _
from django_registration.forms import User
from plotly.offline import plot
from plotly.subplots import make_subplots

from web.mood_colors import DEFAULT_COLORS
from web.service.base_graph import BaseGraph, PERIODS, PERIOD_DAY, PERIOD_NIGHT
from web.structs import PieChartResponse


class PieGraphService(BaseGraph):
    def __init__(self, user: User, mood_mapping: dict, start_dt: date, end_dt: date):
        super().__init__(start_dt=start_dt, end_dt=end_dt)
        self.user = user
        self.mood_mapping = mood_mapping

    def build_chart(
        self,
    ) -> str:
        day = self.load_data(PERIOD_DAY)
        night = self.load_data(PERIOD_NIGHT)
        labels = [self.mood_mapping.get(x) for x in day.label_numbers]
        colors = [DEFAULT_COLORS[x] for x in day.label_numbers]

        fig = make_subplots(
            rows=1, cols=2, specs=[[{"type": "domain"}, {"type": "domain"}]]
        )
        fig.add_trace(
            go.Pie(
                labels=labels,
                values=day.values,
                textinfo="label+percent",
                insidetextorientation="radial",
                marker=dict(colors=colors, line=dict(color="#000000", width=2)),
            ),
            1,
            1,
        )
        fig.add_trace(
            go.Pie(
                labels=labels,
                values=night.values,
                textinfo="label+percent",
                insidetextorientation="radial",
                marker=dict(colors=colors, line=dict(color="#000000", width=2)),
            ),
            1,
            2,
        )
        # Use `hole` to create a donut-like pie chart
        fig.update_traces(hole=0.4, hoverinfo="label+percent+name")
        fig.update_layout(
            # Add annotations in the center of the donut pies.
            annotations=[
                dict(text=_("day"), x=0.18, y=0.5, font_size=20, showarrow=False),
                dict(text=_("night"), x=0.82, y=0.5, font_size=20, showarrow=False),
            ],
        )
        return plot(fig, output_type="div", include_plotlyjs=True)

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
