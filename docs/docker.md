# Docker

Docker Compose is the recommended method to run `stimmungskalender` in production. 
Below are the steps to deploy `stimmungskalender` with Docker Compose.

## Step 1 - Download the required files

Create a directory of your choice (e.g. `./stimmungskalender`) to hold the docker-compose.yml file.

```sh
mkdir ./stimmungskalender && cd ./stimmungskalender
```

Download `docker-compose.yml` by running the following commands:

```sh
wget -O docker-compose.yml https://raw.githubusercontent.com/rain0r/stimmungskalender/refs/heads/master/docker-compose.yml
```

## Step 2 - Edit `docker-compose.yml`

Open the file `docker-compose.yml` with your favorite editor and adjust some settings:

Under `app > environment`, there are some settings you may want to edit:

 - `ALLOWED_HOSTS`: add the external URL of your `stimmungskalender` installation
 - `SECRET_KEY`: should be set to a unique, unpredictable value [Django Docs](https://docs.djangoproject.com/en/5.0/ref/settings/#secret-key)
 - `TIME_ZONE` : the time zone for this installation (default: `Europe/Berlin`)
 - `FIRST_DAY_OF_WEEK`: `0` sunday, `1`: monday (default)
 - `LANGUAGE_CODE`: [Django Docs](https://docs.djangoproject.com/en/5.0/ref/settings/#language-code) (default: `de-de`)

Now, initialise the database and create the first user. 
You will be prompted for a username, a password and an email address.
You can leave the email address empty.

```sh
docker compose run app first_run
```

## Step 3 - Start the containers

From the directory you created in Step 1 (which should now contain your customized `docker-compose.yml`), 
run the following command to start `stimmungskalender` as a background service:

```sh
docker compose up -d
```

Visit http://localhost:7890 and log in with the user you just created.