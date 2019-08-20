#!/bin/sh

sleep 3

# TODO: run migration only when debug=True

python manage.py collectstatic --noinput
python manage.py migrate
python manage.py runserver
