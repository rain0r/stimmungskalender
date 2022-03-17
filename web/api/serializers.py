from rest_framework import serializers

from web import models


class MoodsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Moods
        fields = "__all__"


class WeekSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Week
        fields = ["week_date", "note"]


class EntrySerializer(serializers.ModelSerializer):
    week = WeekSerializer(many=False, read_only=True)

    class Meta:
        model = models.Entry
        fields = ["week", "mood_day", "mood_night", "day"]
