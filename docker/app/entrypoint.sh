#!/bin/sh

set -e

export DJANGO_SUPERUSER_USERNAME=admin
export DJANGO_SUPERUSER_PASSWORD=admin
export DJANGO_SUPERUSER_EMAIL=admin@example.com

chown -R www-data:www-data /logs

BASE_DIR="/srv/www/stimmungskalender"
V_ENV="${BASE_DIR}/.venv"
PYTHON="${V_ENV}/bin/python"

# Define help message
show_help() {
    echo """
Usage: docker run <imagename> COMMAND

Commands

sh          : Start /bin/sh
default_user: default_user
dev         : Start a normal Django development server
first_run   : Setup the initial database
help        : Show this message
manage      : Start manage.py
shell       : Start a Django Python shell
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
    sh)
        /bin/sh "${@:2}"
        ;;
    default_user)
        $PYTHON ${BASE_DIR}/manage.py createsuperuser --noinput --username $DJANGO_SUPERUSER_USERNAME --email $DJANGO_SUPERUSER_EMAIL
        ;;
    dev)
        echo "Running Development Server on 0.0.0.0:${PORT}"
        $PYTHON ${BASE_DIR}/manage.py runserver 0.0.0.0:${PORT}
        ;;
    first_run)
        $PYTHON ${BASE_DIR}/manage.py migrate
        translate
        $PYTHON ${BASE_DIR}/manage.py collectstatic --noinput
        $PYTHON ${BASE_DIR}/manage.py createsuperuser
        ;;
    manage)
        $PYTHON ${BASE_DIR}/manage.py "${@:2}"
        ;;
    shell)
        $PYTHON ${BASE_DIR}/manage.py shell
        ;;
    translate)
        translate
        ;;
    uwsgi)
        echo "Running App (uWSGI)..."
        uwsgi --ini /srv/www/stimmungskalender/docker/app/uwsgi.ini
        ;;
    *)
        show_help
        ;;
esac
