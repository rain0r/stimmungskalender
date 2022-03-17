from django.http import HttpResponse


class SkJsonResponse(HttpResponse):
    def __init__(self, data, **kwargs):

        kwargs.setdefault("content_type", "application/json")
        super().__init__(content=data, **kwargs)
