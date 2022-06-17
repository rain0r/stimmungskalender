#!/bin/sh

set -e

export DJANGO_SUPERUSER_USERNAME=admin
export DJANGO_SUPERUSER_PASSWORD=admin
export DJANGO_SUPERUSER_EMAIL=admin@example.com

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
    ../virtualenv/bin/python ../virtualenv/bin/django-admin makemessages -l de_DE # > /dev/null 2>&1
    ../virtualenv/bin/python ../virtualenv/bin/django-admin makemessages -l en_GB # > /dev/null 2>&1
    ../virtualenv/bin/python ../virtualenv/bin/django-admin compilemessages # > /dev/null 2>&1
    cd ..
}

py="./virtualenv/bin/python"

# Run
case "$1" in
    sh)
        /bin/sh "${@:2}"
        ;;
    default_user)
        $py manage.py createsuperuser --noinput --username $DJANGO_SUPERUSER_USERNAME --email $DJANGO_SUPERUSER_EMAIL
        ;;
    dev)
        echo "Running Development Server on 0.0.0.0:${PORT}"
        $py manage.py runserver 0.0.0.0:${PORT}
        ;;
    first_run)
        $py manage.py migrate
        translate
        $py manage.py collectstatic --noinput
        $py manage.py createsuperuser
        ;;
    manage)
        $py manage.py "${@:2}"
        ;;
    shell)
        $py manage.py shell
        ;;
    translate)
        translate
        ;;
    uwsgi)
        echo "Running App (uWSGI)..."
        # uwsgi --ini docker/app/uwsgi.ini --static-map /static=/srv/www/stimmungskalender/static/
        uwsgi --ini docker/app/uwsgi.ini
        # sleep 9999
        ;;
    *)
        show_help
        ;;
esac
