# Example `nginx` config

```nginx
server {

    listen 443 ssl http2;
    listen [::]:443 ssl http2;

    access_log off;
    error_log off;

    # If you need logging
    # access_log /var/log/nginx/stimmungskalender.access.log;
    # error_log /var/log/nginx/stimmungskalender.error.log;

    location /m/ {
        # Should match MEDIA_URL
        alias /srv/www/stimmungskalender/m/; # Should match MEDIA_ROOT
    }
    location /static/ {
        root /srv/www/stimmungskalender;
    }
    location / {
        include uwsgi_params;
        uwsgi_pass unix:///srv/www/stimmungskalender/socket;
    }
}
```
