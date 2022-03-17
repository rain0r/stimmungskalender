# Example configuration

# `.env` file

```ini
ADMINS="Foobar:Foobar@example.com"
ALLOWED_HOSTS=sk.example.com
CACHE_URL='file:///var/tmp/django_cache/sk.example.com'
CSRF_TRUSTED_ORIGINS=https://sk.example.com
DATABASE_URL=pgsql://<user>:<password>@<host>/<database_name>
DEBUG=False
LOG_PATH='/var/log/uwsgi/sk.example.com.log'
SECRET_KEY=<secret_key>
SESSION_COOKIE_SECURE=True
SITE_URL=https://sk.example.com
STATIC_ROOT="/srv/www/sk.example.com/static/"
```

## Other databases

For other databases than postgres, see the [examples](https://github.com/kennethreitz/dj-database-url#url-schema) in the ` dj-database-url` docs.

For sqlite, the `DATABASE_URL` might look like this:

```ini
DATABASE_URL=sqlite:////srv/www/stimmungskalender/sk.sqlite
```

The database file will reside in `/srv/www/stimmungskalender/sk.sqlite`.

## Caches

To use no cache at all:

```ini
CACHE_URL='dummy://'
```


## `SECRET_KEY`

To generate a value for `SECRET_KEY` (from inside `/srv/www/stimmungskalender`):


```shell
./virtualenv/bin/python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'
```