var express = require('express');
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var app = express();

app.get('/', function(req, res){
	console.log('render');
	res.sendFile(__dirname + '/index.html');
});

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('chat message', function(msg){
		io.emit('chat message',msg);
	});
	socket.on('disconnect',function(){
		console.log('user disconnected');
	});
});

http.listen(3000, function(){
	  console.log('listening on *:3000');
});
