var http=require("http")
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello world \n');
}).listen(5005);
console.log('server running at http://localhost:5005/');