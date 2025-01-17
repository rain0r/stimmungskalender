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

```sh
git clone https://github.com/rain0r/stimmungskalender/
cd stimmungskalender
docker compose up web -d
```

This starts `stimmungskalender` on port `8080`. 

Now, initialise the database and create the first user:

```sh
docker compose run app first_run
```

Show all available commands:

```sh
docker compose run app help
```

Visit http://localhost:8080/ and log in with user you just created.
