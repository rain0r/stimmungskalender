container_name = sk-app

build:
	docker compose build
up:
	docker compose up
down:
	docker compose down
reset-volumes:
	docker compose down --volumes
run: build up
reset: reset-volumes run
app-shell:
	docker exec -it $(container_name) sh
django-shell:
	docker exec -it $(container_name) ./.venv/bin/python ./manage.py shell
first-run:
	docker compose run app first_run
requirements:
	./.venv/bin/poetry export --without-hashes --format=requirements.txt --only=main > requirements.txt
format:
	./.venv/bin/isort . && ./.venv/bin/black .
