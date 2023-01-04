from django.conf import settings
from django.core.exceptions import BadRequest
from django.http import JsonResponse
from django.utils import translation
from django.views.i18n import JSONCatalog
from drf_spectacular.utils import extend_schema, inline_serializer
from rest_framework import serializers as drf_serializers
from rest_framework import views, status
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from web import serializers
from web.models import UserSettings, PERIODS, Moods, UserMoodColorSettings
from web.query_params import QP_START_DT, QP_END_DT, QP_MOOD, QP_SEARCH_TERM, QP_PERIOD
from web.service.bar_graph import BarGraphService
from web.service.pie_graph import PieGraphService
from web.service.scatter_graph import ScatterGraphService
from web.service.settings import SettingsService
from web.service.sk import SkService
from web.views import DefaultDateHandler


class EntryDayView(GenericAPIView):
    """
    Set a mood for a single day and period.
    """

    permission_classes = [IsAuthenticated]
    serializer_class = serializers.WeekdayEntrySerializer

    @extend_schema(
        request=inline_serializer(
            name="EntryDaySerializer",
            fields={
                "mood": drf_serializers.ChoiceField(Moods),
                "period": drf_serializers.ChoiceField(PERIODS),
                "day": drf_serializers.DateField(format=settings.SK_DATE_FORMAT),
            },
        ),
    )
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


class SaveNoteView(GenericAPIView):
    """
    Save note for a week.
    """

    permission_classes = [IsAuthenticated]
    serializer_class = serializers.WeekSerializer

    @extend_schema(
        request=inline_serializer(
            name="SaveNoteSerializer",
            fields={
                "note": drf_serializers.CharField(),
                "week_date": drf_serializers.DateField(format=settings.SK_DATE_FORMAT),
            },
        ),
    )
    def post(self, request):
        week = request.data.get("week_date", None)
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


class MoodTableView(GenericAPIView):
    """
    Get data for a specific week.
    """

    permission_classes = [IsAuthenticated]
    serializer_class = serializers.MoodTableSerializer

    @extend_schema(
        parameters=[
            inline_serializer(
                name="MoodTableSerializer",
                fields={
                    QP_START_DT: drf_serializers.DateField(
                        format=settings.SK_DATE_FORMAT, required=False
                    ),
                },
            ),
        ],
    )
    def get(self, request):
        sk_service = SkService(request.user)
        start_day_p = request.GET.get(QP_START_DT, None)
        mood_table = sk_service.mood_table(start_day_p)
        serializer = serializers.MoodTableSerializer(mood_table)
        return Response(serializer.data)


class SearchView(GenericAPIView):
    """
    Provide endpoint to search for weeks.
    """

    permission_classes = [IsAuthenticated]
    serializer_class = serializers.WeekSerializer

    @extend_schema(
        parameters=[
            inline_serializer(
                name="WeekSerializer",
                fields={
                    "search": drf_serializers.CharField(required=False),
                    "mood": drf_serializers.ChoiceField(Moods, required=False),
                    QP_START_DT: drf_serializers.DateField(
                        format=settings.SK_DATE_FORMAT, required=False
                    ),
                    QP_END_DT: drf_serializers.DateField(
                        format=settings.SK_DATE_FORMAT, required=False
                    ),
                },
            ),
        ],
    )
    def get(self, request):
        sk_service = SkService(request.user)
        start_dt = self.request.GET.get(QP_START_DT, "")
        end_dt = self.request.GET.get(QP_END_DT, "")
        results = sk_service.search(
            mood=self.request.GET.get(QP_MOOD, ""),
            search_term=self.request.GET.get(QP_SEARCH_TERM, ""),
            start_dt=start_dt,
            end_dt=end_dt,
        )
        serializer = serializers.WeekSerializer(results, many=True)
        return Response(serializer.data)


class SkJSONCatalog(GenericAPIView, JSONCatalog):
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

    @extend_schema(
        request=inline_serializer(
            name="SetLanguageSerializer",
            fields={
                "language": drf_serializers.ChoiceField(settings.LANGUAGES),
            },
        ),
    )
    def post(self, request):
        user_language = request.data.get("language", settings.LANGUAGE_CODE).strip()
        translation.activate(user_language)
        return Response(status=status.HTTP_200_OK)


class StandoutDataView(GenericAPIView):
    """
    Get the standout data.
    """

    permission_classes = [IsAuthenticated]
    serializer_class = serializers.StandoutDataSerializer

    def get(self, request):
        sk_service = SkService(request.user)
        standout_data = sk_service.standout_data()
        serializer = serializers.StandoutDataSerializer(standout_data, many=True)
        return Response(serializer.data)


class ScatterGraphView(DefaultDateHandler, GenericAPIView):
    """
    Get the mood scatter graph.
    """

    permission_classes = [IsAuthenticated]
    serializer_class = serializers.ScatterGraphResponseSerializer

    @extend_schema(
        parameters=[
            inline_serializer(
                name="ScatterGraphSerializer",
                fields={
                    "view": drf_serializers.ChoiceField(
                        ["markers", "lines"], required=False
                    ),
                    QP_START_DT: drf_serializers.DateField(
                        format=settings.SK_DATE_FORMAT, required=False
                    ),
                    QP_END_DT: drf_serializers.DateField(
                        format=settings.SK_DATE_FORMAT, required=False
                    ),
                },
            ),
        ],
    )
    def get(self, request):
        sk_service = SkService(request.user)
        start_dt = self.default_start_dt()
        end_dt = self.default_end_dt()
        scatter_graph = ScatterGraphService(
            is_markers=True,
            mood_mapping=sk_service.mood_mapping,
            user=request.user,
            start_dt=start_dt,
            end_dt=end_dt,
        )
        serializer = serializers.ScatterGraphResponseSerializer(
            scatter_graph.load_data(), many=True
        )
        return Response(serializer.data)


class PieChartGraphView(DefaultDateHandler, GenericAPIView):
    """
    Get the mood scatter graph.
    """

    permission_classes = [IsAuthenticated]
    serializer_class = serializers.PieChartResponseSerializer

    @extend_schema(
        parameters=[
            inline_serializer(
                name="PieChartGraphSerializer",
                fields={
                    QP_START_DT: drf_serializers.DateField(
                        format=settings.SK_DATE_FORMAT, required=False
                    ),
                    QP_END_DT: drf_serializers.DateField(
                        format=settings.SK_DATE_FORMAT, required=False
                    ),
                    QP_PERIOD: drf_serializers.ChoiceField(
                        choices=PERIODS, required=True
                    ),
                },
            ),
        ],
    )
    def get(self, request):
        sk_service = SkService(request.user)
        start_dt = self.default_start_dt()
        end_dt = self.default_end_dt()
        period = request.GET.get(QP_PERIOD, None)

        if not period:
            return Response(status=400)
        pie_graph = PieGraphService(
            user=request.user,
            mood_mapping=sk_service.mood_mapping,
            start_dt=start_dt,
            end_dt=end_dt,
        )
        serializer = serializers.PieChartResponseSerializer(pie_graph.load_data(period))
        return Response(serializer.data)


class BarChartGraphView(DefaultDateHandler, GenericAPIView):
    """
    Returns data for the "Average Moods" bar chart.
    """

    permission_classes = [IsAuthenticated]
    serializer_class = serializers.BarChartResponseSerializer

    @extend_schema(
        parameters=[
            inline_serializer(
                name="BarChartGraphSerializer",
                fields={
                    QP_START_DT: drf_serializers.DateField(
                        format=settings.SK_DATE_FORMAT, required=False
                    ),
                    QP_END_DT: drf_serializers.DateField(
                        format=settings.SK_DATE_FORMAT, required=False
                    ),
                },
            ),
        ],
    )
    def get(self, request):
        sk_service = SkService(request.user)
        start_dt = self.default_start_dt()
        end_dt = self.default_end_dt()
        print(f"start_dt: {start_dt}")
        bar_graph = BarGraphService(
            user=self.request.user,
            mood_mapping=sk_service.mood_mapping,
            start_dt=start_dt,
            end_dt=end_dt,
        )

        serializer = serializers.BarChartResponseSerializer(bar_graph.load_data())
        return Response(serializer.data)


class UserMoodColorSettingsView(GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.UserMoodColorSettingsSerializer
    queryset = UserMoodColorSettings.objects.all()

    def get(self, request):
        sk_service = SettingsService(request.user)
        serializer = serializers.UserMoodColorSettingsSerializer(
            sk_service.user_colors_settings(), many=True
        )
        return Response(serializer.data)


class FormsDisplayedView(GenericAPIView):
    """
    Enable and disable forms
    """

    permission_classes = [IsAuthenticated]
    serializer_class = serializers.UserSettingsSerializer

    def get(self, request):
        user_settings = UserSettings.objects.get(user=request.user)
        serializer = serializers.UserSettingsSerializer(user_settings)
        return Response(serializer.data)

    @extend_schema(
        request=inline_serializer(
            name="FormsDisplayedSerializer",
            fields={
                "night_form": drf_serializers.BooleanField(),
                "day_form": drf_serializers.BooleanField(),
            },
        ),
    )
    def post(self, request):
        night_form = request.data.get("night_form")
        day_form = request.data.get("day_form")
        ss = SettingsService(request.user)
        ss.set_forms_displayed(day=day_form, night=night_form)
        return Response(status=status.HTTP_200_OK)


class GraphView(GenericAPIView):
    """
    General graph info
    """

    permission_classes = [IsAuthenticated]
    serializer_class = serializers.GraphTimeRangesSerializer

    @extend_schema(
        responses=inline_serializer(
            name="GraphViewSerializer",
            fields={
                "first_day": drf_serializers.DateField(format=settings.SK_DATE_FORMAT),
                "last_week_start_dt": drf_serializers.DateField(
                    format=settings.SK_DATE_FORMAT
                ),
                "last_month_start_dt": drf_serializers.DateField(
                    format=settings.SK_DATE_FORMAT
                ),
                "last_year_start_dt": drf_serializers.DateField(
                    format=settings.SK_DATE_FORMAT
                ),
            },
        ),
    )
    def get(self, request):
        sk_service = SkService(request.user)
        serializer = serializers.GraphTimeRangesSerializer(
            sk_service.graph_time_ranges()
        )
        return Response(serializer.data)


class CalendarView(GenericAPIView):
    """
    Return data for the calendar view: all entries.
    """

    permission_classes = [IsAuthenticated]
    serializer_class = serializers.CalendarSerializer

    def get(self, request):
        sk_service = SkService(request.user)
        serializer = serializers.CalendarSerializer(sk_service.calendar())
        return Response(serializer.data)


class ExportView(GenericAPIView):

    permission_classes = [IsAuthenticated]
    serializer_class = serializers.ExportDataSerializer

    def get(self, request):
        sk_service = SkService(request.user)
        serializer = serializers.ExportDataSerializer(sk_service.export())
        return Response(serializer.data)
