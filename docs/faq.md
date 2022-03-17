# FAQ

## What databases are supported?

All database engines that are supported by [Django](https://docs.djangoproject.com/en/4.0/ref/settings/#std:setting-DATABASE-ENGINE).

 * Postgres
 * MySQL
 * SQLite
 * Oracle


## How can I use MySQL?

The database line in the `.env` file should look like this:

```ini
DATABASE_URL=mysql://my_user:my_password@my_host/my_database
```

In the file `requirements/common.txt`, replace the line that contains `psycopg2` with `mysqlclient`.

Alternatively, `pip install mysqlclient`. Refer to the [docs](https://github.com/PyMySQL/mysqlclient) for more info.

## How can I use SQLite?

No additional packages are needed. You can scrap line that contains `psycopg2` from `requirements/common.txt`.

The database line in the `.env` file should look like this:

```ini
DATABASE_URL=sqlite:////home/my_user/sk.sqlite
```

## Is there a docker image?

Not yet, but I'm open for pull requests.