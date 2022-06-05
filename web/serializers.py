from rest_framework import serializers
from rest_framework_dataclasses.serializers import DataclassSerializer

from web import models
from web.structs import (
    MoodTable,
    WeekdayEntry,
    StandoutData,
    GraphTimeRanges,
    SkCalendar,
    ScatterGraphResponse,
    PieChartResponse,
    GraphDataPointY,
)


class WeekSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Week
        fields = ["week_date", "note"]


class WeekdayEntrySerializer(DataclassSerializer):
    class Meta:
        dataclass = WeekdayEntry


class MoodTableSerializer(DataclassSerializer):
    week = WeekSerializer()

    class Meta:
        dataclass = MoodTable


class StandoutDataSerializer(DataclassSerializer):
    entry = WeekdayEntrySerializer()

    class Meta:
        dataclass = StandoutData


class UserSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserSettings
        fields = ["view_is_markers", "view_day_form", "view_night_form"]


class GraphTimeRangesSerializer(DataclassSerializer):
    class Meta:
        dataclass = GraphTimeRanges


class CalendarSerializer(DataclassSerializer):
    class Meta:
        dataclass = SkCalendar


class GraphDataPointYSerializer(DataclassSerializer):
    class Meta:
        dataclass = GraphDataPointY


class ScatterGraphResponseSerializer(DataclassSerializer):
    class Meta:
        dataclass = ScatterGraphResponse


class PieChartResponseSerializer(DataclassSerializer):
    class Meta:
        dataclass = PieChartResponse
