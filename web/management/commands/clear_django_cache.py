from django.core.cache import cache
from django.core.management import BaseCommand


class Command(BaseCommand):
    def handle(self, *args: tuple, **options: dict) -> None:
        cache.clear()
        print("Cache cleared!")
