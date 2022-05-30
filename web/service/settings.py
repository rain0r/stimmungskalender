from django.contrib.auth.models import User

from web import models
from web.models import UserSettings


class SettingsService:
    def __init__(
        self,
        user: User,
    ):
        self._user = user

    def set_forms_displayed(self, **kwargs: dict) -> None:
        for period in models.PERIODS:
            UserSettings.objects.update_or_create(
                user=self._user,
                defaults={
                    "user": self._user,
                    f"view_{period}_form": bool(kwargs.get(period)),
                },
            )
