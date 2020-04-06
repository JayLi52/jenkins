var http = require('http');
var port = 8000;

/**
 * var app = require('../app');
 * var server = http.createServer(app);
 */
var arg = process.argv.splice(2);

var data = { key: 'hello', value: 'world'};

var server = http.createServer(function(request,response){
    response.writeHead(200,{
        'content-type': 'application/json'
    });
    response.write('Hello World -- 0');
    response.end(JSON.stringify(arg));
});

server.listen(port);
console.log('Server running on port 8000');