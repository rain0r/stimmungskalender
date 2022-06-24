![Screenshot of Stimmungskalender](.github/sk-logo.png)

# stimmungskalender

`stimmungskalender` is a mood calendar. It is a simple but effective way of keeping track of your daily mood and sleep.

This can can help you identify patterns to establish a better understanding of your wellbeing or sleeping habits.

It's built with [Django](https://www.djangoproject.com/) and can be self-hosted.

---

## Features

* You can track your mood of each day and night
* Every week can be annotated with a note
* Diagrams (build with [Plotly](https://plotly.com/))
* Localized (currently in English and German)
* If you like to track only daytime (or only nights), you can choose so in the settings
* REST-api (if you like to build your own frontend)
* Privacy-friendly: no external resources (css, js) loaded

---

![Screenshot of Stimmungskalender](.github/form.png)

---

To take a first look `stimmungskalender`, you can set up a local running instance. 

See [`docs/quickstart.md`](docs/quickstart.md) or [`docs/docker.md`](docs/docker.md) for Docker.

If you want to deploy in production, follow the instructions in [`docs/install.md`](docs/install.md).

There is also a [`docs/faq.md`](docs/faq.md).

## REST API

An OpenAPI 3.0 schema can be accessed under `/api/schema/` and swagger under `/api/schema/swagger-ui/`.

---

## Requirements

Requires Python **3.8** or higher.
