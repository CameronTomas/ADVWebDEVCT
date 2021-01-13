var http = require("http")

http.createServer(function(req, response){


    response.writeHead(200,{'Content-Type':'text/pain'});
    response.end('Hello World\n')
}).listen(3000);
console.log('Server running on port 3000');