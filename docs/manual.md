# Installation

These are **productive** deployment instructions are for `nginx`, `uwsgi` and `openrc`.

Throughout this document, we are assuming the following:

 * `uwsgi` is running as user `nginx`
 * The source code is located at `/srv/www/stimmungskalender`
 * The virtualenv is located at  `/srv/www/stimmungskalender/virtualenv`
 * The database backend is `postgres`, accessed by the user `stimmungskalender`

Create the postgres database and a user for `stimmungskalender`:

```shell
createuser stimmungskalender
createdb -O stimmungskalender stimmungskalender
```

Get the `stimmungskalender` source code:

```shell
cd /srv/www/
git clone https://github.com/rain0r/stimmungskalender.git
```

Change to the directory:

```shell
cd /srv/www/stimmungskalender
```

To separate code and config, `stimmungskalender` uses [python-decouple](https://github.com/henriquebastos/python-decouple).

This means, we need to place a file called `.env` in the root directory of the application `/srv/www/stimmungskalender` .

An example `.env` file can be found at [`docs/examples/env-prod.md`](examples/env-prod.md#env-file)

```shell
touch .env
# Edit the file to set database access, site url etc
```

Create the virtualenv: 

```shell
python3 -m venv virtualenv
```

Install the required depdendencies:

```shell
./virtualenv/bin/pip install -r requirements/prod.txt
```

Populate the database:

```shell
./virtualenv/bin/python manage.py migrate
```

Create the admin user for ` stimmungskalender`:

```shell
./virtualenv/bin/python manage.py createsuperuser
```

Copy all needed static files (images, JavaScript files etc.) to the static root directory:

```shell
./virtualenv/bin/python manage.py collectstatic --noinput
```

To use `stimmungskalender` in different languages:

```shell
./virtualenv/bin/django-admin compilemessages
```

## uwsgi

An example `uwsgi` ini file is located at [`docs/examples/uwsgi.config.md`](examples/uwsgi.config.md).

## openRC

An example `openrc` init script that manages `stimmungskalender` is located at [`docs/examples/init.service.md`](examples/init.service.md).

## systemd

For systemd, please see the official [uwsgi documentation](https://uwsgi-docs.readthedocs.io/en/latest/Systemd.html)

## nginx

A working `nginx` configuration is located at [`docs/examples/nginx.config.md`](examples/nginx.config.md).

## Updating
In order to update the application:

```shell
cd /srv/www/stimmungskalender

# Pull code changes
git pull

# Update installed pip packages and install newly added dependencies (if any).
./virtualenv/bin/pip install -r requirements/prod.txt -U

# Apply database changes (if there are any)
./virtualenv/bin/python migrate

# Collect static files
./virtualenv/bin/python collectstatic --noinput
  
# Correct ownernship
chown -R nginx:nginx /srv/www/stimmungskalender

# Restart the uwsgi service (openrc only)
/etc/init.d/stimmungskalender restart
```
