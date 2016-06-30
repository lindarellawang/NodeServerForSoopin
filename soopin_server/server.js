var http = require('http');
var hostname = '52.41.175.55'

var port = 3000;
http.createServer(function(req,res) {

    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello Linda, I am Node server placed on Amazon EC2 Ubuntu server');
}).listen(port);
console.log('Server running');