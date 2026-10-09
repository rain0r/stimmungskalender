#!/bin/sh

uv run ruff check --select I --fix
uv run ruff format
uv run djlint --reformat web/templates/
