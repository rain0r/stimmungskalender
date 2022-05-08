from django.conf import settings
from django.core.exceptions import BadRequest
from django.http import JsonResponse
from django.utils import translation
from django.views.i18n import JSONCatalog
from rest_framework import views, status
from rest_framework.permissions import AllowAny
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


class SearchView(views.APIView):
    """
    Provide endpoint to search for weeks.
    """

    def get(self, request):
        sk_service = SkService(request.user)
        results = sk_service.search(
            mood=self.request.GET.get("mood", ""),
            search_term=self.request.GET.get("search_term", ""),
            start_date=self.request.GET.get("start_day", ""),
            end_date=self.request.GET.get("end_day", ""),
        )
        serializer = serializers.WeekSerializer(results, many=True)
        return Response(serializer.data)


class SkJSONCatalog(views.APIView, JSONCatalog):
    permission_classes = [AllowAny]

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.user_language = settings.LANGUAGE_CODE

    def setup(self, request, *args, **kwargs):
        super().setup(request, *args, **kwargs)
        self.user_language = self.request.GET.get("lang")
        translation.activate(self.user_language)

    def render_to_response(self, context, **response_kwargs):
        response = JsonResponse(context)
        response.set_cookie(settings.LANGUAGE_COOKIE_NAME, self.user_language)

        return response


class SetLanguageView(views.APIView):
    """
    Set the language of a user.
    """

    def post(self, request):
        user_language = request.data.get("language", settings.LANGUAGE_CODE).strip()
        translation.activate(user_language)
        return Response(status=status.HTTP_200_OK)
