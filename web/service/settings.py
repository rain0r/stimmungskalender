from django.conf import settings
from django.contrib.auth.models import User
from django.http import QueryDict

from web import models
from web.models import UserSettings


class SettingsService:
    def __init__(
        self,
        user: User,
    ):
        self._user = user

    def user_settings(self) -> UserSettings:
        return UserSettings.objects.get(user=self._user)

    def set_forms_displayed(self, **kwargs: dict) -> None:
        for period in models.PERIODS:
            UserSettings.objects.update_or_create(
                user=self._user,
                defaults={
                    "user": self._user,
                    f"view_{period}_form": bool(kwargs.get(period)),
                },
            )

    def get_default_view_mode(self) -> str:
        try:
            obj = UserSettings.objects.get(user=self._user)
            if obj.view_is_markers:
                return "markers"
            else:
                return "lines"
        except UserSettings.DoesNotExist:
            return settings.DEFAULT_VIEW_MODE

    def is_markers(self, query_dict: QueryDict):
        if "view" in query_dict:
            return query_dict.get("view", "markers") == "markers"
        else:
            return self.get_default_view_mode() == "markers"

    def set_markers(self, view_is_markers: str) -> None:
        if view_is_markers:
            UserSettings.objects.update_or_create(
                user=self._user,
                defaults={
                    "user": self._user,
                    "view_is_markers": view_is_markers == "markers",
                },
            )
