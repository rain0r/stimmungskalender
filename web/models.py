from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver


class Moods(models.IntegerChoices):
    VERY_BAD = 1
    BAD = 2
    MEDIUM = 3
    GOOD = 4
    VERY_GOOD = 5


class Entry(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    week = models.ForeignKey("Week", on_delete=models.CASCADE, null=True)
    mood_day = models.IntegerField(choices=Moods.choices, null=True)
    mood_night = models.IntegerField(choices=Moods.choices, null=True)
    day = models.DateField(db_index=True)

    def __str__(self):
        return str(
            f"User: {self.user}, Date: {self.day}, Day: {self.mood_day}, Night: {self.mood_night}"
        )

        class Meta:
            constraints = [
                models.UniqueConstraint(fields=["user", "day"], name="unique entry")
            ]


class Week(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    week_date = models.DateField(db_index=True, null=True)  # Start of the week
    note = models.TextField(blank=True)

    def __str__(self):
        return f"User: {self.user}, Week Date: {self.week_date}, Note: {self.note[:10]}"

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=["user", "week_date"], name="unique entry")
        ]


class UserSettings(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    view_is_markers = models.BooleanField(default=True)
    view_day_form = models.BooleanField(default=True)
    view_night_form = models.BooleanField(default=True)


# Django database signals

# Create a UserSettings entry for each user
@receiver(post_save, sender=User)
def create_user_settings(sender, instance, created, **kwargs):
    if created:
        UserSettings.objects.create(user=instance)
