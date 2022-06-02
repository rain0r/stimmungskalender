import typing
from datetime import date, timedelta, datetime
from enum import Enum

from django.conf import settings
from django.contrib.auth.models import User
from django.db.models import Q, QuerySet
from django.utils import timezone

from web.models import Entry, Week, Moods
from web.service.pie_graph import PERIOD_NIGHT, PERIOD_DAY
from web.structs import (
    WeekdayEntry,
    MoodTable,
    StandoutData,
    GraphTimeRanges,
    SkCalendar,
)


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

    def calendar(self) -> SkCalendar:
        qs = Entry.objects.filter(user=self._user).order_by("-day")
        try:
            first_day = qs.last().day
            last_day = qs.first().day
        except AttributeError:
            return SkCalendar(
                first_day=timezone.now().date(),
                last_day=timezone.now().date(),
                entries=[],
            )
        entries = self._entries_range(first_day, last_day)
        data = SkCalendar(
            first_day=first_day,
            last_day=last_day,
            entries=entries,
        )
        return data

    def search(
        self,
        search_term: str = "",
        start_dt: str = "",
        end_dt: str = "",
        mood: str = "",
    ) -> QuerySet:
        qs = Week.objects.filter(user=self._user).order_by("-week_date")
        qs = self._filter_search(qs, search_term)
        qs = self._filter_date(qs, start_dt, end_dt)
        qs = self._filter_mood(qs, mood)

        # Exclude future weeks
        qs = qs.exclude(week_date__gt=timezone.now())
        return qs

    def mood_table(self, start_day_p: str) -> MoodTable:
        week_start = self._week_start(start_day_p)
        days_of_week = self._week_data(week_start)
        week = self._week(week_start)
        next_week = self._next_week(week_start)
        prev_week = self._prev_week(week_start)

        return MoodTable(
            days_of_week=days_of_week,
            week=week,
            next_week=next_week,
            prev_week=prev_week,
        )

    def save_note(self, week: str, note: str) -> Week:
        """
        :param week: Week in format YYYY-MM-DD, eg: 2022-04-18
        :param note:
        :return:
        """
        week_date = datetime.strptime(week, settings.SK_DATE_FORMAT).date()
        week_date += timedelta(days=0 - week_date.weekday())
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

    def save_entry(self, period: str, mood: int, day: str) -> WeekdayEntry:
        """Set or remove a mood"""

        form_mapping = {
            "night": PERIOD_NIGHT,
            "day": PERIOD_DAY,
        }

        # Create related week object
        dt1 = datetime.strptime(day, settings.SK_DATE_FORMAT)
        dt1 += timedelta(days=0 - dt1.weekday())
        my_week, created = Week.objects.get_or_create(user=self._user, week_date=dt1)

        db_data = {"day": day, "user": self._user, "week": my_week}
        if period == "night":
            db_data[PERIOD_NIGHT] = mood
        elif period == "day":
            db_data[PERIOD_DAY] = mood
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

    def standout_data(self) -> typing.List[StandoutData]:
        ret = []
        qs = Entry.objects.filter(user=self._user)

        # very good day
        ret.append(
            StandoutData(
                label="last_very_good_day",
                css_class="alert-success",
                entry=(qs.filter(mood_day=Moods.VERY_GOOD).order_by("-id").first()),
            )
        )

        # very good night
        ret.append(
            StandoutData(
                label="last_very_good_night",
                css_class="alert-success",
                entry=(qs.filter(mood_night=Moods.VERY_GOOD).order_by("-id").first()),
            )
        )

        # very bad day
        ret.append(
            StandoutData(
                label="last_very_bad_day",
                css_class="alert-danger",
                entry=(qs.filter(mood_day=Moods.VERY_BAD).order_by("-id").first()),
            )
        )

        # very bad night
        ret.append(
            StandoutData(
                label="last_very_bad_night",
                css_class="alert-danger",
                entry=(qs.filter(mood_night=Moods.VERY_BAD).order_by("-id").first()),
            )
        )
        return ret

    def graph_time_ranges(self) -> GraphTimeRanges:
        return GraphTimeRanges(
            first_day=self._first_day(),
            last_week_start_dt=(timezone.now() + timedelta(days=-7)).strftime(
                "%Y-%m-%d"
            ),
            last_month_start_dt=(timezone.now() + timedelta(days=-30)).strftime(
                "%Y-%m-%d"
            ),
            last_year_start_dt=(timezone.now() + timedelta(days=-365)).strftime(
                "%Y-%m-%d"
            ),
        )

    def _first_day(self) -> str:
        """Returns the date of the first mood entry. If the user has no entries, returns today's date"""
        qs = Entry.objects.filter(user=self._user).order_by("day")
        if qs.count() > 0:
            obj = qs.first()
            return obj.day.strftime("%Y-%m-%d")
        return timezone.now().strftime("%Y-%m-%d")

    def _week_data(self, first_day: date) -> typing.List[WeekdayEntry]:
        last_day = first_day + timedelta(days=7)
        ret2 = self._entries_range(first_day, last_day)

        return ret2

    def _week(self, week_start: date) -> Week:
        # Make sure we use the start of the week
        week_start += timedelta(days=0 - week_start.weekday())
        my_week, created = Week.objects.get_or_create(
            user=self._user, week_date=week_start
        )
        return my_week

    def _next_week(self, week_start: date) -> str:
        ret = week_start + timedelta(days=0 - week_start.weekday() + 7)
        return ret.strftime(settings.SK_DATE_FORMAT)

    def _prev_week(self, week_start: date) -> str:
        ret = week_start + timedelta(days=0 - week_start.weekday() - 7)
        return ret.strftime(settings.SK_DATE_FORMAT)

    def _week_start(self, start_day_p: str = "") -> date:
        """
        Returns the start of a week defined by YYYY-W format, eg: 2022-54
        :param start_day_p:
        :return:
        """
        if start_day_p:
            dt1 = datetime.strptime(f"{start_day_p}", settings.SK_DATE_FORMAT)
        else:
            dt1 = timezone.now()
        dt1 += timedelta(days=0 - dt1.weekday())
        return dt1.date()

    def _filter_mood(
        self,
        qs: QuerySet,
        mood_p: str = "",
    ) -> QuerySet:
        try:
            mood = int(mood_p)
        except ValueError:
            return qs
        if mood in Moods:
            qs = qs.filter(Q(entry__mood_day=mood) | Q(entry__mood_night=mood))
        return qs

    def _filter_search(
        self,
        qs: QuerySet,
        search_term: str = "",
    ) -> QuerySet:
        search_term = search_term.strip()
        if search_term:
            qs = qs.filter(note__icontains=search_term)
        return qs

    def _filter_date(
        self,
        qs: QuerySet,
        start_date: str = "",
        end_date: str = "",
    ) -> QuerySet:
        start = start_date.strip()
        end = end_date.strip()
        if start:
            start_dt = datetime.strptime(start, settings.SK_DATE_FORMAT).date()
            qs = qs.filter(week_date__gte=start_dt)
        if end:
            end_dt = datetime.strptime(end, settings.SK_DATE_FORMAT).date()
            qs = qs.filter(week_date__lte=end_dt)
        return qs

    def _entries_range(
        self, first_day: date, last_day: date
    ) -> typing.List[WeekdayEntry]:
        """
        Generates a list of WeekdayEntry objects for a date range. Fills empty days with empty data.
        :param first_day: Uses entries of this day or after
        :param last_day: Uses entries of this day or before
        :return:
        """
        qs = (
            Entry.objects.filter(user=self._user)
            .filter(day__gte=first_day, day__lte=last_day)
            .order_by("-day")
        )
        delta = last_day - first_day
        days = [(first_day + timedelta(days=d)) for d in range(delta.days)]
        week_data = {}
        for day in days:
            week_data[day.strftime(settings.SK_DATE_FORMAT)] = WeekdayEntry(
                day=day, mood_day=None, mood_night=None
            )
        for entry in qs:
            week_data[entry.day.strftime(settings.SK_DATE_FORMAT)] = WeekdayEntry(
                day=entry.day, mood_day=entry.mood_day, mood_night=entry.mood_night
            )
        return [week_data[i] for i in week_data]
