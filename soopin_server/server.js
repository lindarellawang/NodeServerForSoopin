var http = require('http');
var hostname = '52.41.175.55'
http.createServer(function(req,res) {

    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello Linda, I am Node server placed on Amazon EC2 Ubuntu server');
}).listen(3000, hostname);
console.log('Server running at http://52.41.175.55:80/');