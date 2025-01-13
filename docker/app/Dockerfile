FROM python:3.12-alpine

# Vars from the compose file
ARG DATABASE_URL
ARG LOG_FILE_PATH
ARG SECRET_KEY
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
  STATIC_ROOT=$STATIC_ROOT \
  DATABASE_URL=$DATABASE_URL \
  LOG_FILE_PATH=$LOG_FILE_PATH \
  SECRET_KEY=$SECRET_KEY \
  STATIC_ROOT=$STATIC_ROOT

# Install system packages
RUN apk add --update build-base \
    postgresql-dev uwsgi uwsgi-logfile \
    uwsgi-python3 cargo gettext python3-dev \
    nodejs npm ncdu

RUN mkdir /db
COPY --chown=uwsgi:uwsgi docker/app/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod a+x /usr/local/bin/entrypoint.sh

WORKDIR /srv/www/stimmungskalender

# Add the project source
COPY --chown=uwsgi:uwsgi . .

RUN ./scripts/node.sh

RUN python -m venv --clear .venv
RUN ./.venv/bin/pip -qqq install -U pip setuptools
RUN ./.venv/bin/pip -qqq install poetry
RUN ./.venv/bin/poetry install --no-interaction --only main

RUN ./.venv/bin/python manage.py collectstatic --noinput

WORKDIR /srv/www/stimmungskalender/web
RUN /srv/www/stimmungskalender/.venv/bin/django-admin compilemessages

RUN chown -R uwsgi:uwsgi . /var/log/uwsgi/

WORKDIR /srv/www/stimmungskalender/
ENTRYPOINT ["entrypoint.sh"]

# Run uWSGI by default
CMD ["uwsgi"]