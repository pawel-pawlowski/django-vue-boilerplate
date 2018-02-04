FROM python:3.6

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /srv/app/requirements.txt

WORKDIR /srv/app/

RUN pip install -r requirements.txt

COPY ./ /srv/app/

CMD ["./startup.sh"]