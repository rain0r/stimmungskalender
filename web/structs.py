import typing
from dataclasses import dataclass
from datetime import date

from web.models import Week, Entry


@dataclass
class WeekdayEntry:
    day: date
    mood_day: typing.Optional[int] = 0
    mood_night: typing.Optional[int] = 0

    def __key(self):
        return self.day, self.mood_day, self.mood_night

    def __hash__(self):
        return hash(self.__key())

    def __eq__(self, other):
        if isinstance(other, WeekdayEntry):
            return self.__key() == other.__key()
        return NotImplemented

    def __lt__(self, other):
        return self.day < other.day


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
