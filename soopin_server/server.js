var http = require('http');
http.createServer(function(req,res) {

    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello Linda, I am Node server placed on Amazon EC2 Ubuntu server');
}).listen(3000, '52.41.175.55');
console.log('Server running at http://127.0.0.1:3000/');