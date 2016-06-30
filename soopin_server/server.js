var http = require('http');
var hostname = 'localhost'
http.createServer(function(req,res) {

    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello Linda, I am Node server placed on Amazon EC2 Ubuntu server');
}).listen(9000, hostname);
console.log('Server running at http://127.0.0.1:3000/');