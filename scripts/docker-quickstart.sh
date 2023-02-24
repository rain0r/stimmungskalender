#!/bin/sh

docker pull rain0r/stimmungskalender

wget https://raw.githubusercontent.com/rain0r/stimmungskalender/master/docker/app/django-env-sqlite -O sqlite-env

docker run --env-file sqlite-env \
        -v static:/srv/www/stimmungskalender/static \
        -v dbdir:/db rain0r/stimmungskalender first_run \
        --name stimmungskalender

docker run --env-file sqlite-env \
        -v static:/srv/www/stimmungskalender/static \
        -v dbdir:/db rain0r/stimmungskalender default_user \
        --name stimmungskalender

docker run --name stimmungskalender -p 8080:8000 \
        --env-file sqlite-env \
        -v static:/srv/www/stimmungskalender/static \
        -v dbdir:/db rain0r/stimmungskalender \
