# Migrating from Postgres to SQLite

From version `2.0.0` on, `stimmungskalender` uses SQLite instead of Postgres to store its data.

If you like to switch to SQLite, the following steps might help you:

1. Export your data to json:

```sh
docker exec sk-app "./.venv/bin/python" "manage.py" "dumpdata" "--natural-foreign" "--natural-primary" "-e" "contenttypes" "-e" "auth.Permission" > stimmungskalender.json
```

2. Create a new directory, download the updated `docker-compose.yml` and `.env.sample` from version `2.0.0`.

3. Rename `.env.sample` to `.env` and edit it to your needs

4. Create the directory that holds the database:

```sh
mkdir data
```

5. Start the container

```sh
docker compose up -d
```

6. Prepare the database:

```sh
docker compose run app migrate
```

7. Import the previously exported json file:

```sh
docker exec stimmungskalender "./.venv/bin/python" "manage.py" "loaddata" "/data/stimmungskalender.json"
```
