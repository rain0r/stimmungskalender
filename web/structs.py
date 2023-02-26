import typing
from dataclasses import dataclass
from datetime import date

from web.models import Entry, Week


@dataclass
class WeekdayEntry:
    day: date
    mood_day: typing.Optional[int] = 0
    mood_night: typing.Optional[int] = 0


@dataclass
class MoodTable:
    days_of_week: typing.List[WeekdayEntry]
    week: Week
    next_week: str
    prev_week: str


@dataclass
class StandoutData:
    label: str
    css_class: str
    entry: Entry


@dataclass
class GraphTimeRanges:
    first_day: str
    last_week_start_dt: str
    last_month_start_dt: str
    last_year_start_dt: str


@dataclass
class SkCalendar:
    first_day: date
    last_day: date
    entries: typing.List[WeekdayEntry]


@dataclass
class ScatterGraphDataPointY:
    """
    Data class for the y-axis of the scatter graph.
    """

    day: int
    night: int


@dataclass
class ScatterGraphResponse:
    """
    Data class for the scatter graph.
    """

    x: str
    y: ScatterGraphDataPointY


@dataclass
class PieChartResponse:
    """
    Data class for the pie chart graph.
    """

    label_numbers: typing.List[int]
    values: typing.List[int]


@dataclass
class BarChartResponse:
    """
    Data class for the "Average Mood" bar chart.
    """

    labels: typing.List[str]
    values: typing.List[float]


@dataclass
class GeneralStats:
    day_count: int
    night_count: int


@dataclass
class ExportData:
    entries: SkCalendar
    moods: dict
    weeks: typing.List[Week]
