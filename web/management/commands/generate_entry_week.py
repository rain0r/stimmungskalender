from django.core.management import BaseCommand


class Command(BaseCommand):
    def handle(self, *args, **options):
        pass
        # for user in User.objects.all():
        #     qs = Entry.objects.filter(user=user)
        #     for item in qs.iterator():
        #         # Reset to start of the week
        #         week_date = item.day
        #         week_date += timedelta(days=0 - item.day.weekday())
        #         week, created = Week.objects.get_or_create(user=user,
        #                                                    week_date=week_date)
        #         item.week = week
        #         item.save()
