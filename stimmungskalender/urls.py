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
from django.conf.urls import include
from django.contrib import admin
from django.urls import path, re_path
from django.views.i18n import JavaScriptCatalog, JSONCatalog

from web import views, api

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
    path("jump-to-week/", views.JumpToWeekView.as_view(), name="jump-to-week"),
    path("graph/", views.GraphView.as_view(), name="graph"),
    path("settings/", views.SettingsView.as_view(), name="settings"),
    path("search/", views.SearchView.as_view(), name="search"),
    path("api/entry-day/", api.EntryDayView.as_view()),
    path("api/mood-table/", api.MoodTableView.as_view()),
    path("api/save-note/", api.SaveNoteView.as_view()),
    path("api/search/", api.SearchView.as_view()),
    path("api/set-language/", api.SetLanguageView.as_view()),
    re_path(r"^rosetta/", include("rosetta.urls")),
    path("i18n/", include("django.conf.urls.i18n")),
    path("jsi18n/", JavaScriptCatalog.as_view(), name="javascript-catalog"),
    path(
        "jsoni18n/",
        api.SkJSONCatalog.as_view(domain="django"),
        name="json-catalog",
    ),
    path("dj-rest-auth/", include("dj_rest_auth.urls")),
]
