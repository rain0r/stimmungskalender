from dataclasses import dataclass
from datetime import date


@dataclass
class WeekdayEntry:
    weekday: date
    mood_day: int
    mood_night: int

    def __key(self):
        return self.weekday, self.mood_day, self.mood_night

    def __hash__(self):
        return hash(self.__key())

    def __eq__(self, other):
        if isinstance(other, WeekdayEntry):
            return self.__key() == other.__key()
        return NotImplemented

    def __lt__(self, other):
        return self.weekday < other.weekday
