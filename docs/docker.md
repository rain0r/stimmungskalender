# Docker

Steps to get `stimmungskalender` up and running:

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
