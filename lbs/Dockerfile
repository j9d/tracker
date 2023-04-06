FROM python:3.10-slim
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev
RUN pip install --upgrade pip setuptools wheel psycopg

WORKDIR /app/api
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . ./
EXPOSE 8000
