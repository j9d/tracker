
import socket
import time
import argparse
""" Check if port is open, avoid docker-compose race condition """

parser = argparse.ArgumentParser(description='Check if port is open, avoid\
                                 docker-compose race condition')
parser.add_argument('--service-name', required=True)
parser.add_argument('--ip', required=True)
parser.add_argument('--port', required=True)

args = parser.parse_args()

# Get arguments
service_name = str(args.service_name)
port = int(args.port)
ip = str(args.ip)

# Infinite loop
while True:
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    result = sock.connect_ex((ip, port))
    if result == 0:
        print(f"{service_name} port is open")
        break
    else:
        seconds = 3
        print(f"{service_name} port is not open, retrying in {seconds}")
        time.sleep(seconds)
