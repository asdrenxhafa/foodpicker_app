var webserver = require('http');


console.log('starting web server...');

webserver.createServer(function(request, response){
    response.writeHead(200,{'Content-type':'text/plain'});
    response.write('Hello world');
    response.end();
}).listen(8888);
console.log('Webserver started!')