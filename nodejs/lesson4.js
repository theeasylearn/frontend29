//import http module
let http = require('http'); //built in module, used to create server 
//import local module (module created by developer)
let pwd = require('./mypasswordmanager');

//import local module
let common = require('./mycommon');

//create server that has function which will run for each and every request
let server = http.createServer(function(request,response){
    pwd.getRandomPassword(12);
    pwd.getHashedPassword('apple');
    pwd.comparePassword('apple','banana');

    console.log(common.sitename);
    console.log(common.email);
    console.log(common.mobile);
    
});

server.listen(5000);
console.log("server is started on port no 5000");