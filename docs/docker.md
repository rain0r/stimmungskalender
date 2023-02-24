# Docker

## From Docker Hub

This image solely contains the `stimmungskalender` app, without `nginx` or `postgres`. 

### Via startup script

Just execute `scripts/docker-quickstart.sh` to get it all up and running

```sh
wget https://raw.githubusercontent.com/rain0r/stimmungskalender/master/scripts/docker-quickstart.sh
cat docker-quickstart.sh # Don't just execute scripts from the internet without checking first
sh docker-quickstart.sh
```

Visit http://localhost:8080/ and log in with username `admin` and password `admin`.

### Manually

To get the latest version of `stimmungskalender` from Docker Hub:

```sh
docker pull rain0r/stimmungskalender
```

```sh
wget https://raw.githubusercontent.com/rain0r/stimmungskalender/master/docker/app/django-env-sqlite -O sqlite-env
```

In the following examples, the `sqlite-env` will be used as the name of the environment file.

Before starting, the database needs to be initialized:

```sh
docker run --env-file sqlite-env \
        -v static:/srv/www/stimmungskalender/static \
        -v dbdir:/db rain0r/stimmungskalender first_run
```

Next, create the first user. This command creates the user `admin` with the password `admin`.

```sh
docker run --env-file sqlite-env \
        -v static:/srv/www/stimmungskalender/static \
        -v dbdir:/db rain0r/stimmungskalender default_user
```

This runs the `stimmungskalender` on port `8080` on the host.

```sh
docker run -p 8080:8000 --env-file sqlite-env \
        -v static:/srv/www/stimmungskalender/static \
        -v dbdir:/db rain0r/stimmungskalender
```

## Build from source

This includes `nginx` and `postgres`. 

Steps to get `stimmungskalender` up and running:

```sh
git clone https://github.com/rain0r/stimmungskalender/
```

```sh
docker compose up web
```

In another shell, initialise the application:

```sh
docker compose run app first_run
```

Show all available commands

```sh
docker compose run app help
```

