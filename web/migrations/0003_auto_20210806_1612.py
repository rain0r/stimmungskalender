# Generated by Django 3.2.6 on 2021-08-06 14:12

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("web", "0002_auto_20210805_2201"),
    ]

    operations = [
        migrations.AddField(
            model_name="entry",
            name="notes",
            field=models.TextField(default=""),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name="entry",
            name="day",
            field=models.DateField(unique=True),
        ),
    ]
