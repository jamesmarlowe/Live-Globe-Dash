var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var count = 0;

var cur_second;
    
app.get('/health/', function(req, res){
  res.send('healthy\n');
});

var globe_data_options = {
  host: 'localhost',
  port: 80,
  path: '/globe_data/'
};

// Call for new globe data from nginx
setInterval(function(){
    cur_second = Date.now()/1000|0;
    tmp = [];
    http.get(options, function(res) {
        res.on('data', function(chunk) {
            tmp.push chunk
        });
        res.on('end', function(e) {
            io.emit("globe_data", tmp.join(''));
        });
    })
}, 5000);

http.listen(8080, function(){
  console.log('listening on *:8080');
});
