# Generated by Django 4.0.2 on 2022-02-18 21:06

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("web", "0020_usersettings_js_entry_form"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="usersettings",
            name="js_entry_form",
        ),
    ]
