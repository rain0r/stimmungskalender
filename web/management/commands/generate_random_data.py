import random
from datetime import timedelta

from django.conf import settings
from django.core.management import BaseCommand, CommandParser
from django.utils import timezone
from django_registration.forms import User

from web.models import PERIODS, Moods, Week
from web.service.sk import SkService


class Command(BaseCommand):
    def add_arguments(self, parser: CommandParser) -> None:
        parser.add_argument("username")
        parser.add_argument("days", type=int, default=30, nargs="?")

    def handle(self, *args: tuple, **options: dict) -> None:
        user = User.objects.get(username=options.get("username"))
        days = options.get("days", 30)
        Week.objects.filter(user=user).delete()
        sk_service = SkService(user)
        days = [(timezone.now() - timedelta(days=d)).date() for d in range(days)]
        mood_list = list(Moods)

        for period in PERIODS:
            for day in days:
                mood = random.choice(mood_list)
                sk_service.save_entry(
                    period,
                    mood,
                    day.strftime(settings.SK_DATE_FORMAT),
                )
