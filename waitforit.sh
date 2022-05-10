#!/bin/bash

OUTPUT="Can't connect"
MYSQL="Madhav@19"
echo "going to sleep for 30s"
sleep 30
echo "returning from sleep"
# while [ $OUTPUT == *"Can't connect"* ]
# do
#     OUTPUT=$(mysqladmin ping -h 127.0.0.1 -u root --password=$$MYSQL)
#     echo OUTPUT
#     # sleep 10
# done
cd server
# npm install
npm start