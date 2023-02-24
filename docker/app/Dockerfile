FROM python:3.10-alpine

# Defines which decouple environment file to use
ARG django_env=django-env-pgsql

ENV PYTHONFAULTHANDLER=1 \
  PYTHONUNBUFFERED=1 \
  PYTHONHASHSEED=random \
  PYTHONDONTWRITEBYTECODE=1 \
  # pip:
  PIP_NO_CACHE_DIR=1 \
  PIP_DISABLE_PIP_VERSION_CHECK=1 \
  PIP_DEFAULT_TIMEOUT=100

# Set the default workdir
WORKDIR /srv/www/stimmungskalender

# Install system packages
RUN apk add --no-cache gcc gettext musl-dev nano nodejs npm \
    postgresql-client postgresql-dev uwsgi uwsgi-logfile \
    uwsgi-python3

# Add the project source
COPY --chown=uwsgi:uwsgi . .
COPY --chown=uwsgi:uwsgi docker/app/$django_env .env

RUN mkdir /db
RUN touch /srv/www/stimmungskalender/sk_debug.log /db/db.sqlite3

RUN ./scripts/node.sh

RUN python3 -m venv --clear virtualenv
RUN ./virtualenv/bin/pip install .
RUN ./virtualenv/bin/python manage.py collectstatic --noinput

WORKDIR /srv/www/stimmungskalender/web
RUN /srv/www/stimmungskalender/virtualenv/bin/python /srv/www/stimmungskalender/virtualenv/bin/django-admin compilemessages # > /dev/null 2>&1
WORKDIR /srv/www/stimmungskalender

RUN chmod 777 /db/db.sqlite3

# Add the entrypoint.sh
COPY --chown=uwsgi:uwsgi docker/app/entrypoint.sh /tmp/
ENTRYPOINT ["/tmp/entrypoint.sh"]

# Run uWSGI by default
CMD ["uwsgi"]
