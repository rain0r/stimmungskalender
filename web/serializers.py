from rest_framework import serializers
from rest_framework_dataclasses.serializers import DataclassSerializer

from web import models
from web.structs import (
    BarChartResponse,
    ExportData,
    GraphTimeRanges,
    MoodTable,
    PieChartResponse,
    ScatterGraphDataPointY,
    ScatterGraphResponse,
    SkCalendar,
    StandoutData,
    WeekdayEntry,
)


class WeekSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Week
        fields = ["week_date", "note"]


class UserSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserSettings
        fields = ["view_is_markers", "view_day_form", "view_night_form"]


class UserMoodColorSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserMoodColorSettings
        fields = ["mood", "color"]


class WeekdayEntrySerializer(DataclassSerializer):
    class Meta:
        dataclass = WeekdayEntry


class GraphTimeRangesSerializer(DataclassSerializer):
    class Meta:
        dataclass = GraphTimeRanges


class CalendarSerializer(DataclassSerializer):
    class Meta:
        dataclass = SkCalendar


class GraphDataPointYSerializer(DataclassSerializer):
    class Meta:
        dataclass = ScatterGraphDataPointY


class ScatterGraphResponseSerializer(DataclassSerializer):
    class Meta:
        dataclass = ScatterGraphResponse


class PieChartResponseSerializer(DataclassSerializer):
    class Meta:
        dataclass = PieChartResponse


class BarChartResponseSerializer(DataclassSerializer):
    class Meta:
        dataclass = BarChartResponse


class MoodTableSerializer(DataclassSerializer):
    week = WeekSerializer()

    class Meta:
        dataclass = MoodTable


class StandoutDataSerializer(DataclassSerializer):
    entry = WeekdayEntrySerializer()

    class Meta:
        dataclass = StandoutData


class ExportDataSerializer(DataclassSerializer):
    weeks = serializers.ListField(child=WeekSerializer())

    class Meta:
        dataclass = ExportData
