#!/usr/bin/env bash

function env_ready() {
python << END
from pathlib import Path
import environ

envfile = Path('.env')

if envfile.exists():
    with open(envfile) as f:
        environ.Env.read_env(f)

env = environ.Env()
db = env.db()
END
}

function postgres_ready() {
python << END
import sys
import psycopg
from pathlib import Path
import environ

envfile = Path('.env')

if envfile.exists():
    with open(envfile) as f:
        environ.Env.read_env(f)

env = environ.Env()
db = env.db()

try:
    conn = psycopg.connect(dbname=db["NAME"], user=db["USER"], password=db["PASSWORD"], host=db["HOST"], port=db["PORT"])
except psycopg.OperationalError as e:
    print(e)
    sys.exit(-1)
sys.exit(0)
END
}

env_ready || { echo 'Environment configuration failed'; exit 1; }
until postgres_ready do
    echo 'Postgres is unavailable -- sleeping'
    sleep 1
done

echo 'Postgres is ready -- continuing'
exec $cmd
