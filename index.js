var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
     res.sendfile('index.html');
});

io.on('connection', function(socket){
     console.log('a new user has logged on');
     socket.on('chat message', function(msg){
          io.emit('chat message', msg);
     });
});



/* show a message whenever a new user logs on */
io.on('connection', function(client){
     client.emit('chat message', 'new user logged on');
});

// io.on('connection', function(msg){
//      io.emit('chat message', msg);
// });

/* need to boradcast a message when someone logs on or off */

     // socket.on('disconnect', function(){
     //      console.log('user disconnected');
     // });




http.listen(3000, function(){
     console.log('listening on *:3000');
});
