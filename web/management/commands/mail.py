from django.core.mail import mail_admins
from django.core.management import BaseCommand


class Command(BaseCommand):
    help = "Print search results"

    def handle(self, *args, **options):
        mail_admins("Subject here", "Here is the message.", fail_silently=False)
