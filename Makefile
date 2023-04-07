build:
	docker compose down
	docker compose build

up:
	docker compose up

down:
	docker compose down

reup:
	make build
	make up

shell:
	docker exec --tty --interactive django /bin/bash
