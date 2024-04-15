var http = require('http');
var fs = require('fs');
//create server
var server = http.createServer(function(request,response){
    var  filename = 'myfile.html';
    //read file asynchronosly 
    fs.readFile(filename,function(error,FileContent)
    {
        response.writeHead(200,{'content-type':'text/html'});
        response.write(FileContent);
        response.end();
    });

});
server.listen(5000);
console.log('ready to accept request');