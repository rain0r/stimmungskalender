# Generated by Django 4.0.2 on 2022-03-01 20:26

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("web", "0021_remove_usersettings_js_entry_form"),
    ]

    operations = [
        migrations.AddField(
            model_name="usersettings",
            name="view_day_form",
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name="usersettings",
            name="view_night_form",
            field=models.BooleanField(default=True),
        ),
    ]
