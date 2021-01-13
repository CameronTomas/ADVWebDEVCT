var http = require("http")
var url = require('url');
http.createServer(function(request, response){
    var pathName = url.parse(request.url).pathname;

    response.writeHead(200,{'Content-Type':'text/html'});
   
    response.write('<!DOCTYPE html><html><body><div>Request for'+ pathName +'recieved<div></body></html>')
    response.end();
}).listen(3000);
console.log('Server running on http://localhost:3000');