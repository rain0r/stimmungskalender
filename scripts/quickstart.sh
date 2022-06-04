#!/usr/bin/env bash

full_path=$(realpath $0)
dir_path=$(dirname $full_path)

# Use the developer settings for a quick start
cp .env.sample .env

# Create a virtualenv that holds all dependencies
python3 -m venv virtualenv

# We don't need postgres support for now, so let's comment it out
sed -i 's/psycopg2/#psycopg2/' requirements/common.txt

# Install the developer dependencies
./virtualenv/bin/pip install -r requirements/dev.txt

# Initialize the sqlite database
./virtualenv/bin/python manage.py migrate

# Create the frontend texts
if [ -d "${dir_path}/../.git" ]; then
    ./virtualenv/bin/django-admin compilemessages
fi

# Create a user account
./virtualenv/bin/python manage.py createsuperuser

# Generate javascript and css files
if [ -d "${dir_path}/../.git" ]; then
    ./scripts/node.sh
fi

# Start the app
./virtualenv/bin/python manage.py runserver
