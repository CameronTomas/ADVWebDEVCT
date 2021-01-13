var http = require("http")
var url = require('url');
var fileSystem= require('fs')
http.createServer(function(request, response){
    var pathName = url.parse(request.url).pathname;
    var fileName = 'index.html';
    fileSystem.readFile(fileName, callBack);
    function callBack(err, data){
        if(err){
            console.log(err);
            response.writeHead(400, {'Content-Type':'text/html'})
            response.write('<!DOCTYPE html><html><body><div>page not found</div></body></html>')
        }else{
            response.writeHead(200,{'Content-Type':'text/html'});
   
            response.write(data.toString())
        }response.end();
    }
    
   
}).listen(3000);
console.log('Server running on http://localhost:3000');