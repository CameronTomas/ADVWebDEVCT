var http = require("http")

http.createServer(function(request, response){
    var url=request.url

    response.writeHead(200,{'Content-Type':'text/pain'});
    response.end('URL Requested\n'+ url)
}).listen(3000);
console.log('Server running on http://localhost:3000');