from django.core.management import BaseCommand

from web.models import Week


class Command(BaseCommand):
    def handle(self, *args, **options):
        qs = Week.objects.all()
        for item in qs.iterator():
            pass
            # foo = datetime.strptime(f"{item.year}-{item.week}-1", "%Y-%W-%w")
            # item.week_date = foo
            # item.save()
