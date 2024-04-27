var http = require('http');
var event = require('events');
var em = new event.EventEmitter();

//credit card
em.addListener("FD_CLOSE",function(id){
    console.log('function 1 executed for FD close event' + id);
});

//loan
em.addListener("FD_CLOSE",function(id){
    console.log('function 2 executed for FD close event' + id);
});

//parth
em.addListener("FD_CLOSE",function(id){
    console.log('function 3 executed for FD close event' + id);
});

var server = http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'});
    response.write('new request received...');
    em.emit("FD_CLOSE",1001);
    response.end();
});
server.listen(5000);
console.log('ready to accept request...');
