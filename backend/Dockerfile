FROM python:3.6

ENV PYTHONUNBUFFERED 1

RUN adduser --disabled-password --gecos '' user

COPY ./requirements.txt /srv/app/requirements.txt

WORKDIR /srv/app/

RUN pip install -r requirements.txt

COPY ./ /srv/app/

EXPOSE 8000

CMD ["./startup.sh"]