from django.contrib import admin

from web.models import Week, Entry, UserMoodColorSettings

admin.site.register(Entry)
admin.site.register(Week)
admin.site.register(UserMoodColorSettings)
