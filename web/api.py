from django.conf import settings
from django.core.exceptions import BadRequest
from django.http import JsonResponse
from django.utils import translation
from django.views.i18n import JSONCatalog
from rest_framework import views, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from web import serializers
from web.models import UserSettings
from web.query_params import QP_START_DT, QP_END_DT
from web.service.pie_graph import PieGraphService
from web.service.scatter_graph import ScatterGraphService
from web.service.settings import SettingsService
from web.service.sk import SkService

# API views
from web.views import MoodMapping, DefaultDateHandler


class EntryDayView(views.APIView):
    """
    Get and set data for a single day.
    """

    permission_classes = [IsAuthenticated]

    def post(self, request):
        sk_service = SkService(request.user)
        mood = request.data.get("mood", None)
        period = request.data.get("period", None)
        day = request.data.get("day", None)
        obj = sk_service.save_entry(period, mood, day)
        serialized_ret = serializers.WeekdayEntrySerializer(obj, data=request.data)
        if serialized_ret.is_valid():
            return Response(serialized_ret.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serialized_ret.errors, status=status.HTTP_400_BAD_REQUEST)


class SaveNoteView(views.APIView):
    """
    Save note for a week.
    """

    permission_classes = [IsAuthenticated]

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

    permission_classes = [IsAuthenticated]

    def get(self, request):
        sk_service = SkService(request.user)
        start_day_p = request.GET.get("start_dt", "").strip()
        mood_table = sk_service.mood_table(start_day_p)
        serializer = serializers.MoodTableSerializer(mood_table)
        return Response(serializer.data)


class SearchView(views.APIView):
    """
    Provide endpoint to search for weeks.
    """

    permission_classes = [IsAuthenticated]

    def get(self, request):
        sk_service = SkService(request.user)
        start_dt = self.request.GET.get(QP_START_DT, "")
        end_dt = self.request.GET.get(QP_END_DT, "")
        results = sk_service.search(
            mood=self.request.GET.get("mood", ""),
            search_term=self.request.GET.get("search_term", ""),
            start_dt=start_dt,
            end_dt=end_dt,
        )
        serializer = serializers.WeekSerializer(results, many=True)
        return Response(serializer.data)


class SkJSONCatalog(views.APIView, JSONCatalog):
    authentication_classes = []  # disables authentication
    permission_classes = []  # disables permission

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.user_language = settings.LANGUAGE_CODE

    def check_permissions(self, request):
        super().check_permissions(request)

    def setup(self, request, *args, **kwargs):
        super().setup(request, *args, **kwargs)
        lang = self.request.GET.get("lang", "")
        if lang:
            self.user_language = lang
            translation.activate(self.user_language)

    def render_to_response(self, context, **response_kwargs):
        response = JsonResponse(context)
        response.set_cookie(settings.LANGUAGE_COOKIE_NAME, self.user_language)

        return response


class SetLanguageView(views.APIView):
    """
    Set the language of a user.
    """

    permission_classes = [IsAuthenticated]

    def post(self, request):
        user_language = request.data.get("language", settings.LANGUAGE_CODE).strip()
        translation.activate(user_language)
        return Response(status=status.HTTP_200_OK)


class StandoutDataView(views.APIView):
    """
    Get the standout data.
    """

    permission_classes = [IsAuthenticated]

    def get(self, request):
        sk_service = SkService(request.user)
        standout_data = sk_service.standout_data()
        serializer = serializers.StandoutDataSerializer(standout_data, many=True)
        return Response(serializer.data)


class ScatterGraphView(MoodMapping, DefaultDateHandler, views.APIView):
    """
    Get the mood scatter graph.
    """

    permission_classes = [IsAuthenticated]

    def get(self, request):
        is_markers = self.is_markers(self.request.GET)
        start_dt = self.default_start_dt()
        end_dt = self.default_end_dt()
        scatter_graph = ScatterGraphService(
            is_markers=is_markers,
            mood_mapping=self.mood_mapping,
            user=self.request.user,
            start_dt=start_dt,
            end_dt=end_dt,
        )
        return Response(scatter_graph.load_data())


class PieChartGraphView(MoodMapping, DefaultDateHandler, views.APIView):
    """
    Get the mood scatter graph.
    """

    permission_classes = [IsAuthenticated]

    def get(self, request):
        start_dt = self.default_start_dt(self.request)
        end_dt = self.default_end_dt(self.request)
        period = self.request.GET.get("period", None)

        if not period:
            return Response(status=400)

        pie_graph = PieGraphService(
            user=self.request.user,
            mood_mapping=self.mood_mapping,
            start_dt=start_dt,
            end_dt=end_dt,
        )
        label_numbers, values = pie_graph.load_data(period)
        ret = {"label_numbers": label_numbers, "values": values}

        return Response(ret)


class FormsDisplayedView(views.APIView):
    """
    Enable and disable forms
    """

    permission_classes = [IsAuthenticated]

    def get(self, request):
        user_settings = UserSettings.objects.get(user=self.request.user)
        serializer = serializers.UserSettingsSerializer(user_settings)
        return Response(serializer.data)

    def post(self, request):
        night_form = request.data.get("night_form")
        day_form = request.data.get("day_form")
        ss = SettingsService(self.request.user)
        ss.set_forms_displayed(day=day_form, night=night_form)
        return Response(status=status.HTTP_200_OK)


class GraphView(views.APIView):
    """
    General graph info
    """

    permission_classes = [IsAuthenticated]

    def get(self, request):
        sk_service = SkService(request.user)
        serializer = serializers.GraphTimeRangesSerializer(
            sk_service.graph_time_ranges()
        )
        return Response(serializer.data)


class CalendarView(views.APIView):
    """
    Return data for the calendar view
    """

    permission_classes = [IsAuthenticated]

    def get(self, request):
        sk_service = SkService(request.user)
        serializer = serializers.CalendarSerializer(sk_service.calendar())
        return Response(serializer.data)
