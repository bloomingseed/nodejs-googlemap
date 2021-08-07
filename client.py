import requests
from time import sleep
import serial
import pynmea2
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("-host", help="Host URL. E.g: http://192.168.1.8:8080/pi")
args = parser.parse_args()
print('Using host: ',args.host)
port="/dev/ttyAMA0"
ser=serial.Serial(port, baudrate=9600, timeout=0.5)
# dataout = pynmea2.NMEAStreamReader()

while True:
	newdata=ser.readline()
	if newdata[0:6] == "$GPRMC":
		newmsg = pynmea2.parse(newdata.decode('ascii'))
		lat = newmsg.latitude
		lng = newmsg.longitude
		gps = "Latitude=" + str(lat) + ", Longitude=" + str(lng)
		print(gps)
        r = requests.post(args.host,json={
            'lat':lat,
            'lng':lng
        })
        print(r.status_code, r.reason)
        sleep(1)