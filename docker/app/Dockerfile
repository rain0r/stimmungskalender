FROM docker.io/python:3.11-slim-bookworm AS python

FROM python AS python-build-stage

# Vars from the compose file
ARG DATABASE_URL
ARG LOG_FILE_PATH
ARG STATIC_ROOT

ENV PYTHONFAULTHANDLER=1 \
  PYTHONUNBUFFERED=1 \
  PYTHONHASHSEED=random \
  PYTHONDONTWRITEBYTECODE=1 \
  # pip:
  PIP_NO_CACHE_DIR=1 \
  PIP_DISABLE_PIP_VERSION_CHECK=1 \
  PIP_DEFAULT_TIMEOUT=100 \
  # poetry:
  POETRY_CONFIG_DIR=/tmp/POETRY_CONFIG_DIR \
  POETRY_DATA_DIR=/tmp/POETRY_DATA_DIR \
  POETRY_CACHE_DIR=/tmp/POETRY_CACHE_DIR \
  # django
  DATABASE_URL=$DATABASE_URL \
  LOG_FILE_PATH=$LOG_FILE_PATH \
  STATIC_ROOT=$STATIC_ROOT

# Install apt packages
RUN apt-get update && apt-get install --no-install-recommends -y \
  # dependencies for building Python packages
  build-essential \
  # psycopg dependencies
  libpq-dev

WORKDIR /srv/www/stimmungskalender

# Add the project source
COPY --chown=www-data:www-data . .

RUN python -m venv --clear .venv
RUN ./.venv/bin/pip -qqq install -r requirements.txt
RUN ./.venv/bin/pip -qqq install setuptools

# Build frontend
FROM docker.io/node:alpine3.20 AS client-builder

COPY --from=python-build-stage /srv/www/stimmungskalender /srv/www/stimmungskalender

WORKDIR /srv/www/stimmungskalender
RUN ./scripts/node.sh
RUN rm -rf ./node

# Python 'run' stage
FROM python AS python-run-stage

ARG DATABASE_URL
ARG LOG_FILE_PATH
ARG STATIC_ROOT

ENV PYTHONFAULTHANDLER=1 \
  PYTHONUNBUFFERED=1 \
  PYTHONHASHSEED=random \
  PYTHONDONTWRITEBYTECODE=1 \
  # django
  DATABASE_URL=$DATABASE_URL \
  LOG_FILE_PATH=$LOG_FILE_PATH \
  STATIC_ROOT=$STATIC_ROOT

# Install required system dependencies
RUN apt-get update && apt-get install --no-install-recommends -y \
      # psycopg dependencies
      libpq-dev \
      # Translations dependencies
      gettext \
      # web server
      uwsgi-plugin-python3 \
      # cleaning up unused files
      && apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false \
      && rm -rf /var/lib/apt/lists/*


COPY --from=client-builder /srv/www/stimmungskalender /srv/www/stimmungskalender

RUN mkdir /logs
RUN touch /logs/stimmungskalender.log
RUN chown -R www-data:www-data /logs

WORKDIR /srv/www/stimmungskalender

RUN ./.venv/bin/python manage.py collectstatic --noinput

WORKDIR /srv/www/stimmungskalender/web
RUN /srv/www/stimmungskalender/.venv/bin/django-admin compilemessages

COPY --chown=www-data:www-data docker/app/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod a+x /usr/local/bin/entrypoint.sh

WORKDIR /srv/www/stimmungskalender/
ENTRYPOINT ["entrypoint.sh"]

# Run uWSGI by default
CMD ["uwsgi"]
