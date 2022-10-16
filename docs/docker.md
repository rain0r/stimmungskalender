# Docker

## From Docker Hub

This image solely contains the `stimmungskalender` app, without `nginx` or `postgres`. 

### Via startup script

Just execute `scripts/docker-quickstart.sh` to get it all up and running

### Manually

To get the latest version of `stimmungskalender` from Docker Hub:

```sh
docker pull rain0r/stimmungskalender
```

Use one of the environment files, depending on what database engine you would like to use. Choose one of the pre-configured env files: [postgres](https://raw.githubusercontent.com/rain0r/stimmungskalender/master/docker/app/django-env-pgsql) or [sqlite](https://raw.githubusercontent.com/rain0r/stimmungskalender/docker/docker/app/django-env-sqlite)

```sh
wget https://raw.githubusercontent.com/rain0r/stimmungskalender/docker/docker/app/django-env-sqlite -O sqlite-env
```

In the following examples, the `sqlite-env` will be used as the name of the environment file.

The instructions for `postgres` and `sqlite` are basically the same. `postgres` user can omit the `-v dbdir:/db` flag.

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
docker compose up web
```

In another shell, initialise the application:

```sh
docker compose run app first_run
```


All available commands

```sh
docker compose run app
```
