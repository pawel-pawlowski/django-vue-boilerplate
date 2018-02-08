#!/bin/sh

sleep 3

su -m user -c "celery -A backend.celery worker -l=INFO -Q default -n default@%h"
