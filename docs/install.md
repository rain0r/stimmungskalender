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

Download the latest release from [GitHub](https://github.com/rain0r/stimmungskalender/releases) or get the latest `stimmungskalender` source code:

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
# Edit the file to configure database access etc
```

Create the virtualenv:

```shell
python3 -m venv virtualenv
```

Install the required depdendencies:

```shell
./virtualenv/bin/pip install .
```

Populate the database:

```shell
./virtualenv/bin/python manage.py migrate
```

Create the admin user for `stimmungskalender`:

```shell
./virtualenv/bin/python manage.py createsuperuser
```

The next step is only required if you got the source code from GitHub. The release archive contains all required JavaScript and css files.

```shell
# To manage all needed resources, stimmungskalender uses node and webpack.
# This is needed, to avoid pushing production JavaScript files to git 

cd node
npm i && npm run build
```

Copy all needed static files (images, JavaScript files etc.) to the static root directory:

```shell
./virtualenv/bin/python manage.py collectstatic --noinput
```

The next step is only required if you got the source code from GitHub. The release archive contains all required translation files.

```shell
# To use `stimmungskalender` in different languages:
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

# If you cloned the git repository, update it...
git pull

# ... if you downloaded a release, extract it into the existing installation

# Update installed pip packages and install newly added dependencies (if any).
./virtualenv/bin/pip install .

# Apply database changes (if there are any)
./virtualenv/bin/python manage.py migrate

# Collect static files (only need if you cloned the git repository)
./virtualenv/bin/python manage.py collectstatic --noinput
  
# Correct ownernship
chown -R nginx:nginx /srv/www/stimmungskalender

# Restart the uwsgi service (openrc only)
/etc/init.d/stimmungskalender restart
```
