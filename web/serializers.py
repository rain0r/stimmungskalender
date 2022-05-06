from rest_framework import serializers
from rest_framework_dataclasses.serializers import DataclassSerializer

from web import models
from web.structs import MoodTable, WeekdayEntry


class WeekSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Week
        fields = ["id", "week_date", "note"]


class WeekdayEntrySerializer(DataclassSerializer):
    class Meta:
        dataclass = WeekdayEntry


class MoodTableSerializer(DataclassSerializer):
    week = WeekSerializer()

    class Meta:
        dataclass = MoodTable
