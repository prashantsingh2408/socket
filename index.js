var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
  });
  
http.listen(3002, () => {
  console.log('listening on *:3002');
});