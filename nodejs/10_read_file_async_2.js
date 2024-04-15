var http = require('http');
var fs = require('fs');
//create server
var server = http.createServer(function (request, response) {
    var url = request.url;
    console.log(url);
    var filename = url.substring(1); //return whole string after 1st position onwards
    //read file asynchronosly 
    fs.readFile(filename, function (error, FileContent) {
        if (error != null) {
            //there is error
            response.writeHead(404, { 'content-type': 'text/html' });
            response.write('<h1> Page Not found </h1');
            response.end();
        }
        else {
            response.writeHead(200, { 'content-type': 'text/html' });
            response.write(FileContent);
            response.end();
        }
    });

});
server.listen(5000);
console.log('ready to accept request');