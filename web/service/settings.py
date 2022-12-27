import typing

from django.contrib.auth.models import User
from django.http import QueryDict

from web.models import UserSettings, Moods, UserMoodColorSettings
from web.mood_colors import DEFAULT_COLORS


class SettingsService:
    def __init__(
        self,
        user: User,
    ):
        self._user = user
        self._obj = UserSettings.objects.get(user=self._user)

    def save_user_colors_settings(self, colors=None) -> None:
        """
        Sets a color to each mood.
        """
        if colors is None:
            colors = dict()
        for mood in Moods:
            if f"mood-{mood}" in colors:
                color = colors.get(f"mood-{mood}")
            else:
                color = DEFAULT_COLORS.get(mood)
            UserMoodColorSettings.objects.update_or_create(
                user=self._user,
                mood=mood,
                defaults={"color": color},
            )

    def user_colors_settings(self) -> typing.List[UserMoodColorSettings]:
        """
        Returns the color for each mood.
        :return:
        """
        colors = []
        for mood in Moods:
            obj, created = UserMoodColorSettings.objects.get_or_create(
                user=self._user,
                mood=mood,
                defaults={"color": DEFAULT_COLORS.get(mood)},
            )
            colors.append(obj)
        return colors

    def user_settings(self) -> UserSettings:
        return self._obj

    def set_forms_displayed(self, **kwargs: dict) -> None:
        self._obj.view_day_form = bool(kwargs.get("day"))
        self._obj.view_night_form = bool(kwargs.get("night"))
        self._obj.save()

    def get_default_view_mode(self) -> str:
        return "markers" if self._obj.view_is_markers else "lines"

    def is_markers(self, query_dict: QueryDict) -> bool:
        if "view" in query_dict:
            return query_dict.get("view", "markers") == "markers"
        else:
            return self.get_default_view_mode() == "markers"

    def set_markers(self, view_is_markers: str) -> None:
        self._obj.view_is_markers = view_is_markers == "markers"
        self._obj.save()

    def is_use_js_btn(self):
        return self._obj.use_js_btn

    def set_use_js_btn(self, enabled):
        self._obj.use_js_btn = enabled
        self._obj.save()
