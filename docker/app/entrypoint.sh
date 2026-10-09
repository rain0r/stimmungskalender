#!/bin/bash

set -e

BASE_DIR="/app"
V_ENV="${BASE_DIR}/.venv"
PYTHON="${V_ENV}/bin/python"
STATIC_ROOT=/app/static

case "$1" in
    first_run)
        $PYTHON ${BASE_DIR}/manage.py migrate
        $PYTHON ${BASE_DIR}/manage.py collectstatic --noinput
        echo "Creating admin user"
        $PYTHON ${BASE_DIR}/manage.py createsuperuser
        ;;
    migrate)
        $PYTHON ${BASE_DIR}/manage.py migrate
        $PYTHON ${BASE_DIR}/manage.py collectstatic --noinput
        ;;
    uwsgi)
        echo "Running App (uWSGI)..."
        ${V_ENV}/bin/uwsgi --ini  ${BASE_DIR}/docker/app/uwsgi.ini
        ;;
    *)
        uwsgi
        ;;
esac
