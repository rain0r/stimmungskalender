import typing
from datetime import timedelta, date

import plotly.graph_objs as go
from django.utils.translation import gettext_lazy as _
from django_registration.forms import User
from plotly.offline import plot

from web.service.base_graph import BaseGraph
from web.structs import ScatterGraphResponse, GraphDataPointY


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

    def build_plot(self) -> str:
        data = self.load_data()
        mode = "markers" if self.is_markers else "lines"

        trace0 = go.Scatter(
            x=[i.x for i in data],
            y=[i.y.day for i in data],
            cliponaxis=False,
            line_shape="spline",
            mode=mode,
            name=str(_("day")),
        )
        trace1 = go.Scatter(
            x=[i.x for i in data],
            y=[i.y.night for i in data],
            cliponaxis=False,
            line_shape="spline",
            mode=mode,
            name=str(_("night")),
        )
        data = [trace0, trace1]
        layout = go.Layout()
        fig = go.Figure(data=data, layout=layout)
        fig.update_yaxes(
            range=[0, 6],
        )
        fig.update_layout(
            yaxis=dict(
                tickmode="array",
                tickvals=[x for x in self.mood_mapping.keys()],
                ticktext=[x for x in self.mood_mapping.values()],
            ),
            margin=dict(l=5, r=5, b=75, t=75, pad=10),
        )

        return plot(fig, output_type="div", include_plotlyjs=True)

    def load_data(self) -> typing.List[ScatterGraphResponse]:
        """
        Loads data from the last seven days if no dates are provided
        :return:
        """
        data = {}
        day_count = self.build_day_range(self.start_dt, self.end_dt)
        days = [(self.start_dt + timedelta(days=d)) for d in range(day_count)]
        for day in days:
            data[day] = GraphDataPointY(day=0, night=0)
        entries = self.date_range_qs()
        for entry in entries.iterator():
            data[entry.day] = GraphDataPointY(
                day=entry.mood_day, night=entry.mood_night
            )
        ret = []
        for day in days:
            ret.append(ScatterGraphResponse(x=day, y=data[day]))
        return ret
