#!/bin/sh

set -e

export DJANGO_SUPERUSER_USERNAME=admin
export DJANGO_SUPERUSER_PASSWORD=admin
export DJANGO_SUPERUSER_EMAIL=admin@example.com

BASE_DIR="/app"
V_ENV="${BASE_DIR}/.venv"
PYTHON="${V_ENV}/bin/python"
STATIC_ROOT=/app/static


# Define help message
show_help() {
    echo """
Usage: docker exec stimmungskalender COMMAND

Commands

default_user: default_user
first_run   : Setup the initial database
help        : Show this message
manage      : Start manage.py
translate   : Create translation messages
uwsgi       : Run uwsgi server
    """
}

translate() {
    cd web
    find . -type f -name "*.mo" -delete
    $PYTHON "${V_ENV}/bin/django-admin" makemessages -l de_DE # > /dev/null 2>&1
    $PYTHON "${V_ENV}/bin/django-admin" makemessages -l en_GB # > /dev/null 2>&1
    $PYTHON "${V_ENV}/bin/django-admin" compilemessages # > /dev/null 2>&1
    cd ..
}


# Run
case "$1" in
    default_user)
        $PYTHON ${BASE_DIR}/manage.py createsuperuser --noinput --username $DJANGO_SUPERUSER_USERNAME --email $DJANGO_SUPERUSER_EMAIL
        ;;
    first_run)
        $PYTHON ${BASE_DIR}/manage.py migrate
        translate
        $PYTHON ${BASE_DIR}/manage.py collectstatic --noinput
        echo "Creating admin user"
        $PYTHON ${BASE_DIR}/manage.py createsuperuser
        ;;
    manage)
        $PYTHON ${BASE_DIR}/manage.py "${@:2}"
        ;;
    migrate)
        $PYTHON ${BASE_DIR}/manage.py migrate
        translate
        $PYTHON ${BASE_DIR}/manage.py collectstatic --noinput
        ;;
    translate)
        translate
        ;;
    uwsgi)
        echo "Running App (uWSGI)..."
        ${V_ENV}/bin/uwsgi --ini  ${BASE_DIR}/docker/app/uwsgi.ini
        ;;
    *)
        show_help
        ;;
esac
