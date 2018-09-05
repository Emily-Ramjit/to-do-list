#!/usr/bin/env bash


cd ~/Documents/Repos/to-do-list/src/api
npm install 
nohup node server.js &
nohup open http://localhost:3000/ &

cd ~/Documents/Repos/to-do-list/src/client/toDoList
npm install
ng serve
open http://localhost:4200/