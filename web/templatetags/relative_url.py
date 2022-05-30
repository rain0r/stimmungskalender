from django import template

register = template.Library()


@register.simple_tag
def relative_url(value: str, field_name: str, url_encode: str = "") -> str:
    url = "?{}={}".format(field_name, value)
    if url_encode:
        querystring = url_encode.split("&")
        filtered_querystring = filter(
            lambda p: p.split("=")[0] != field_name, querystring
        )
        encoded_querystring = "&".join(filtered_querystring)
        url = "{}&{}".format(url, encoded_querystring)
    return url
