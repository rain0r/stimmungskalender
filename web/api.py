from django.conf import settings
from django.core.exceptions import BadRequest
from rest_framework import views, status
from rest_framework.response import Response

from web import serializers
from web.service.sk import SkService


# API views


class EntryDayView(views.APIView):
    """
    Get and set data for a single day.
    """

    def post(self, request):
        sk_service = SkService(request.user)
        mood = request.data.get("mood", None)
        period = request.data.get("period", None)
        day = request.data.get("day", None)
        obj = sk_service.set_entry(period, mood, day)
        serialized_ret = serializers.WeekdayEntrySerializer(obj, data=request.data)
        if serialized_ret.is_valid():
            return Response(serialized_ret.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serialized_ret.errors, status=status.HTTP_400_BAD_REQUEST)


class SaveNoteView(views.APIView):
    """
    Save note for a week.
    """

    def post(self, request):
        week = request.data.get("week_date", "").strip()
        note = request.data.get("note", "").strip()
        if not week:
            raise BadRequest()

        sk_service = SkService(request.user)
        week = sk_service.save_note(week, note)
        serialized_ret = serializers.WeekSerializer(week, data=request.data)
        if serialized_ret.is_valid():
            return Response(serialized_ret.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serialized_ret.errors, status=status.HTTP_400_BAD_REQUEST)


class MoodTableView(views.APIView):
    """
    Get data for a specific week.
    """

    def get(self, request):
        sk_service = SkService(request.user)
        start_day_p = request.GET.get(settings.QS_START_DAY, "").strip()
        mood_table = sk_service.mood_table(start_day_p)
        serializer = serializers.MoodTableSerializer(mood_table)

        return Response(serializer.data)
