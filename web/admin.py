from django.contrib import admin

from web.models import Week, Entry, UserMoodColorSettings, UserSettings

admin.site.register(Entry)
admin.site.register(Week)
admin.site.register(UserSettings)
admin.site.register(UserMoodColorSettings)
