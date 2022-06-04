# Example `uwsgi` config

```ini
[uwsgi]
gid = nginx
plugins = python39, logfile
plugins-dir = /usr/lib64/uwsgi/
processes = 1
chdir = /srv/www/stimmungskalender
plugins-dir = /usr/local/share/uwsgi
safe-pidfile2 = /var/run/uwsgi/%n.pid
socket = /srv/www/stimmungskalender/socket
virtualenv = /srv/www/stimmungskalender/virtualenv
wsgi-file = stimmungskalender/wsgi.py
```
