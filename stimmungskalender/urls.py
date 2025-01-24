"""stimmungskalender URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.conf import settings
from django.conf.urls import include
from django.contrib import admin
from django.urls import path, re_path
from rest_framework.schemas import get_schema_view

from web import api, views

handler400 = "web.views.custom_bad_request_view"
handler403 = "web.views.custom_permission_denied_view"
handler404 = "web.views.custom_page_not_found_view"
handler500 = "web.views.custom_error_view"

api_urlpatterns = [
    path("api/entry-day/", api.EntryDayView.as_view(), name="api-entry-day"),
    path("api/mood-table/", api.MoodTableView.as_view(), name="api-mood-table"),
    path("api/standout-data/", api.StandoutDataView.as_view()),
    path("api/scatter-graph/", api.ScatterGraphView.as_view(), name="api-scatter-plot"),
    path("api/pie-chart-graph/", api.PieChartGraphView.as_view(), name="api-pie-chart"),
    path("api/bar-chart-graph/", api.BarChartGraphView.as_view(), name="api-bar-chart"),
    path("api/save-note/", api.SaveNoteView.as_view()),
    path("api/search/", api.SearchView.as_view()),
    path("api/graph/", api.GraphView.as_view()),
    path("api/calendar/", api.CalendarView.as_view(), name="api-calendar"),
    path("api/export/", api.ExportView.as_view(), name="export"),
    path("api/set-language/", api.SetLanguageView.as_view()),
    path("api/forms-displayed/", api.FormsDisplayedView.as_view()),
    path(
        "api/mood-colors/",
        api.UserMoodColorSettingsView.as_view(),
        name="api-mood-colors",
    ),
]

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("django.contrib.auth.urls")),
    path("accounts/", include("django_registration.backends.one_step.urls")),
    path("accounts/", include("django.contrib.auth.urls")),
    path("", views.EntryListView.as_view(), name="index"),
    path("logout", views.LogoutView.as_view(), name="logout"),
    path("save-mood/", views.SaveMoodView.as_view(), name="save-mood"),
    path("save-note/", views.SaveNoteView.as_view(), name="save-note"),
    path("save-settings/", views.SaveSettingsView.as_view(), name="save-settings"),
    path("graph/", views.GraphView.as_view(), name="graph"),
    path("settings/", views.SettingsView.as_view(), name="settings"),
    path("search/", views.SearchView.as_view(), name="search"),
    path("calendar/", views.CalendarView.as_view(), name="calendar"),
    re_path(r"^rosetta/", include("rosetta.urls")),
    path("i18n/", include("django.conf.urls.i18n")),
    path(
        "jsoni18n/",
        api.SkJSONCatalog.as_view(domain="django"),
        name="json-catalog",
    ),
    path(
        "openapi",
        get_schema_view(
            title="Stimmungskalender",
            description="API for all things …",
            patterns=api_urlpatterns,
        ),
        name="openapi-schema",
    ),
]
urlpatterns += api_urlpatterns

# Host the static from uWSGI
if settings.IS_WSGI:
    from django.contrib.staticfiles.urls import staticfiles_urlpatterns

    urlpatterns += staticfiles_urlpatterns()
