from django.core.cache import cache
from django.core.management import BaseCommand


class Command(BaseCommand):
    def handle(self, *args, **options):
        cache.clear()
        print("Cache cleared!")
