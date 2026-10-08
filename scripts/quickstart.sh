#!/bin/sh

set -e

if [ ! -f "manage.py" ]; then
    echo "Please run this command from the root of the repository"
    exit 1
fi

if [ ! -x "$(command -v uv)" ]; then
    echo "This script depends on uv (package manager)"
    exit 1
fi

# Use the developer settings for a quick start
cp .env.sample .env
echo "\nDEBUG=True" >> .env

# Create a virtualenv that holds all dependencies
uv sync

# Initialize the sqlite database
uv run manage.py migrate

# Create the frontend texts
uv run django-admin compilemessages > /dev/null

# Create an user account
uv run manage.py createsuperuser

# Generate javascript and css files
./scripts/node.sh

# Start the app
uv run manage.py runserver
