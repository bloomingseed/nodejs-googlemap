import requests
from time import sleep
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("-host", help="Host URL. E.g: http://192.168.1.8:8080/pi")
args = parser.parse_args()
print('Using host: ',args.host)

while True:
	r = requests.post(args.host,json={
		'lat':16.0544,
		'lng':108.2022
	})
	print(r.status_code, r.reason)
	sleep(1)