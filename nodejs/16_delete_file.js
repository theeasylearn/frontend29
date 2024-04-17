var http = require('http');
var fs = require('fs');
//create server
var server = http.createServer(function (request, response) {
    var filename = 'fruits.txt';
    fs.unlink(filename, function (error) {
        response.writeHead(200, { 'content-type': 'text/html' });
        if (error) {
            response.write('file could not be deleted. possibly file does not exists');
        }
        else {
            response.write('file has been deleted successfully');
        }
        response.end();
    });

});
server.listen(5000);
console.log('ready to accept request');