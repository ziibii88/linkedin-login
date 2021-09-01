FROM python:3.9-alpine
MAINTAINER ziibii88

ENV PYTHONUNBUFFERED 1

RUN apk add --no-cache --virtual .build-deps gcc python3-dev

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN pip install -r req.txt
