var http = require("http");
var mydatetime = require("./mydatetime");
var server = http.createServer(function(request,response){
    let today = mydatetime.getDate();
    let now = mydatetime.getTime();
    console.log(`I have received new request on ${today} ${now} `);
});
server.listen(5000);
console.log("server is started on port no 5000");