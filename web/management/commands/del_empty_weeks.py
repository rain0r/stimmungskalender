from django.core.management import BaseCommand
from django.db.models import Count

from web.models import Week


class Command(BaseCommand):
    help = "Print search results"

    def handle(self, *args, **options):
        qs = Week.objects.annotate(number_of_entries=Count("entry")).filter(
            note__exact="", number_of_entries=0
        )
        for item in qs:
            item.delete()
