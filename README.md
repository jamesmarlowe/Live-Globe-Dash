Live-Globe-Dash
===============

Live updating dashboard of locational postback data using socket.io on a globe

Setup
-----
To get the dependencies ready
```
sudo apt-get update
sudo apt-get install nodejs npm
sudo ln -s "$(which nodejs)" /usr/bin/node
sudo npm install --save express@4.10.2
sudo npm install --save socket.io
sudo npm install forever -g
```

To start it
```
forever start liveglobedash.js
bash restart.sh
```

Testing
-------
```
curl localhost/globe_data/
curl localhost:8080/health/
```
