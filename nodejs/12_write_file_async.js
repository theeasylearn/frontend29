var http = require('http');
var fs = require('fs');
//create server
var server = http.createServer(function (request, response) {
    var filename = 'fruits.txt';
    var content = "lemon, coconut";
    fs.writeFile(filename, content, function (error) {
        response.writeHead(200, { 'content-type': 'text/html' });
        response.write('Content Written into file successfully');
        response.end();
    });
});
server.listen(5000);
console.log('ready to accept request');