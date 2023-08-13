from pathlib import Path
import environ
import sys
import psycopg
from time import sleep

def env_ready(): 
    envfile = Path('.env')

    if envfile.exists():
        with open(envfile) as f:
            environ.Env.read_env(f)

    env = environ.Env()
    env.db()
    return True


def postgres_ready():

    envfile = Path('.env')

    if envfile.exists():
        with open(envfile) as f:
            environ.Env.read_env(f)

    env = environ.Env()
    db = env.db()

    try:
        psycopg.connect(dbname=db["NAME"], user=db["USER"], password=db["PASSWORD"], host=db["HOST"], port=db["PORT"])
    except psycopg.OperationalError as e:
        print(e)
        sys.exit(-1)
    sys.exit(0)


if not env_ready():
    print('Environment configuration failed')
    exit(1)

while not postgres_ready:
    print('Postgres is unavailable -- sleeping')
    sleep(1)

print('Postgres is ready -- continuing')
