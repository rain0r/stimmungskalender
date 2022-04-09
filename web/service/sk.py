import typing
from datetime import datetime, timedelta
from enum import Enum

from django.conf import settings
from django.contrib.auth.models import User
from django.utils import timezone, formats
from django.utils.timezone import now

from web.models import Entry, Week
from web.structs import WeekdayEntry, MoodTable


class InvalidPeriodError(Exception):
    pass


class MoodEntryError(Exception):
    pass


class Period(Enum):
    DAY = "day"
    NIGHT = "night"


class SkService:
    def __init__(
        self,
        user: User,
    ):
        self._user = user

    def mood_table(self, start_day_p: str) -> MoodTable:
        week_start = self._week_start(start_day_p)
        days_of_week = self._week_data(week_start)
        week = self._week(week_start)
        next_week = self._next_week(week_start)
        prev_week = self._prev_week(week_start)
        week_label = self._week_label(week_start)
        current_day = self._current_mood(Period.DAY, days_of_week)
        current_night = self._current_mood(Period.NIGHT, days_of_week)

        return MoodTable(
            days_of_week=days_of_week,
            week=week,
            next_week=next_week,
            prev_week=prev_week,
            week_label=week_label,
            current_day=current_day,
            current_night=current_night,
        )

    def save_note(self, week: str, note: str) -> Week:
        """
        :param week: Week in format YYYY-MM-DD, eg: 2022-04-18
        :param note:
        :return:
        """
        # ipdb.set_trace()
        week_date = datetime.strptime(week, "%Y-%m-%d").date()
        Week.objects.update_or_create(
            week_date=week_date,
            user=self._user,
            defaults={
                "week_date": week_date,
                "note": note,
                "user": self._user,
            },
        )
        return Week(note=note, week_date=week_date)

    def set_entry(self, period: str, mood: int, day: str) -> WeekdayEntry:
        """Set or remove a mood"""

        form_mapping = {
            "night": "mood_night",
            "day": "mood_day",
        }

        # Create related week object
        dt1 = datetime.strptime(day, "%Y-%m-%d")
        dt1 += timedelta(days=0 - dt1.weekday())
        my_week, created = Week.objects.get_or_create(user=self._user, week_date=dt1)

        db_data = {"day": day, "user": self._user, "week": my_week}
        if period == "night":
            db_data["mood_night"] = mood
        elif period == "day":
            db_data["mood_day"] = mood
        else:
            raise MoodEntryError()

        if Entry.objects.filter(**db_data).count() == 1:
            # Click on saved mood: remove it
            Entry.objects.filter(**db_data).update(**{form_mapping[period]: None})
            db_data.pop("mood_night", None)
            db_data.pop("mood_day", None)
            obj = Entry.objects.get(**db_data)
        else:
            obj, created = Entry.objects.update_or_create(
                day=day, week=my_week, user=self._user, defaults=db_data
            )

        return WeekdayEntry(
            day=obj.day, mood_day=obj.mood_day, mood_night=obj.mood_night
        )

    def _week_data(self, week_start: datetime) -> typing.List[WeekdayEntry]:
        week = self._week(week_start)
        my_entries = Entry.objects.filter(user=self._user, week=week)
        days = [(week_start + timedelta(days=d)).date() for d in range(7)]
        week_data = {}
        for day in days:
            week_data[day.strftime("%Y-%m-%d")] = WeekdayEntry(
                day=day, mood_day=0, mood_night=0
            )
        for entry in my_entries:
            week_data[entry.day.strftime("%Y-%m-%d")] = WeekdayEntry(
                day=entry.day, mood_day=entry.mood_day, mood_night=entry.mood_night
            )

        return [week_data[i] for i in week_data]

    def _week(self, week_start: datetime) -> Week:
        my_week, created = Week.objects.get_or_create(
            user=self._user, week_date=week_start
        )
        return my_week

    def _next_week(self, week_start: datetime) -> str:
        ret = week_start + timedelta(days=0 - week_start.weekday() + 7)
        return ret.strftime(settings.SK_DATE_FORMAT)

    def _prev_week(self, week_start: datetime) -> str:
        ret = week_start + timedelta(days=0 - week_start.weekday() - 7)
        return ret.strftime(settings.SK_DATE_FORMAT)

    def _week_label(self, week_start: datetime) -> str:
        start = formats.date_format(week_start, "SHORT_DATE_FORMAT")
        end = formats.date_format(
            (week_start + timedelta(days=7)).date(), "SHORT_DATE_FORMAT"
        )
        return f"{start} — {end}"

    # def get_day_entry(self, day: str) -> WeekdayEntry:
    #     try:
    #         entry = Entry.objects.get(user=self._user, day=day)
    #         day = entry.day
    #         mood_day = entry.mood_day
    #         mood_night = entry.mood_night
    #     except Entry.DoesNotExist:
    #         day = timezone.now().date()
    #         mood_day = 0
    #         mood_night = 0
    #     return WeekdayEntry(day=day, mood_day=mood_day, mood_night=mood_night)

    def _week_start(self, start_day_p: str) -> datetime:
        """
        Returns the start of a week defined by YYYY-W format, eg: 2022-54
        :param start_day_p:
        :return:
        """
        if start_day_p:
            dt1 = datetime.strptime(f"{start_day_p}-1", "%Y-%W-%w")
        else:
            dt1 = timezone.now()
        dt1 += timedelta(days=0 - dt1.weekday())
        return dt1

    def _current_mood(
        self, period: Period, days_of_week: typing.List[WeekdayEntry]
    ) -> int:
        today = now().date()
        entry = next((i for i in days_of_week if i.day == today), None)
        if not entry:
            # We're browsing a previous week
            return 0
        if period == Period.NIGHT:
            return entry.mood_night
        elif period == Period.DAY:
            return entry.mood_day
        raise InvalidPeriodError()
