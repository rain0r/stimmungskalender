import random
from datetime import timedelta

from django.conf import settings
from django.core.management import BaseCommand
from django.utils import timezone
from django_registration.forms import User

from web.models import Moods, Week, PERIODS
from web.service.sk import SkService


class Command(BaseCommand):
    def add_arguments(self, parser):
        parser.add_argument("username")

    def handle(self, *args, **options):
        user = User.objects.get(username=options.get("username"))
        Week.objects.filter(user=user).delete()
        sk_service = SkService(user)
        days = [(timezone.now() - timedelta(days=d)).date() for d in range(365)]
        mood_list = list(Moods)

        for period in PERIODS:
            for day in days:
                mood = random.choice(mood_list)
                sk_service.save_entry(
                    period,
                    mood,
                    day.strftime(settings.SK_DATE_FORMAT),
                )
