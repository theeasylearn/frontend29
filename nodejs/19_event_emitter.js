var http = require('http');
var event = require('events');
var em = new event.EventEmitter();

//credit card
let function1 = function(id){
    console.log('function 1 executed for FD close event' + id);
}
em.once("FD_CLOSE",function1);
//loan
let function2 = function(id){
    console.log('function 2 executed for FD close event' + id);
}

//overdraft
em.once("FD_CLOSE",function2);
let function3 = function(id){
    console.log('function 3 executed for FD close event' + id);
}
em.once("FD_CLOSE",function3);
var server = http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'});
    response.write('new request received...');
    em.emit("FD_CLOSE",1001);
    response.end();
});

server.listen(5000);
console.log('ready to accept request...');
