#!/bin/bash

python docker/pg_wait.py
python manage.py migrate --noinput
python manage.py createsuperuser
python manage.py collectstatic --noinput
python manage.py runserver 0.0.0.0:8000
