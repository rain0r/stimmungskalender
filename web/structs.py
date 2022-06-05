import typing
from dataclasses import dataclass
from datetime import date

from web.models import Week, Entry


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
class GraphDataPointY:
    day: int
    night: int


@dataclass
class ScatterGraphResponse:
    x: str
    y: GraphDataPointY


@dataclass
class PieChartResponse:
    label_numbers: typing.List[int]
    values: typing.List[int]


@dataclass
class GeneralStats:
    day_count: int
    night_count: int
