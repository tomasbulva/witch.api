
var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var iwconfig = require('wireless-tools/iwconfig');


var data = [
  { apName:'Casa De Holden', id:'1234' },
  { apName:'Casa De Tomas', id:'5678' }
];



// iwconfig.status(function(err, status) {
//   console.log('iwconfig.status',status);
// });


app.listen(9999);

function handler (req, res) {

  res.writeHead(200);
  res.end(data);

  //fs.readFile(__dirname + '/index.html',
  // 'test',
  // function (err, data) {
  //   if (err) {
  //     res.writeHead(500);
  //     return res.end('Error loading index.html');
  //   }
  //
  //   res.writeHead(200);
  //   res.end(data);
  // });
}

io.on('connection', function (socket) {

  console.log('io.on');
  // var iwlist = require('wireless-tools/iwlist');
  // iwlist.scan({ iface : 'wlan0'}, function(err, networks) {
  // console.log(networks);
  socket.emit('aps', data);
  // });


  socket.on('aps', function (data) {
    console.log(data);
  });

});
