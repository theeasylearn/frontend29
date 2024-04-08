var http = require("http");
var server = http.createServer(function(request,response){
    console.log("I have received new request....");
});
server.listen(5000);
console.log("server is started on port no 5000");