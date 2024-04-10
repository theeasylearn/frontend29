var http = require('http');
var mail = require("./mymail");
var account = require("./myaccount");
var pdf = require('./mypdf');
var server = http.createServer(function(request,response){
    console.log("I have new request....");
    mail.sendEmail("ankit3385@gmail.com,","test mail subject","it is example of email");
    mail.sendEmailWithAttachment("ankit3385@gmail.com,","test mail subject","it is example of email","anything");
    console.log(account.accno);
    console.log(account.bank);
    console.log(account.ifsc);
    console.log(account.name);
    //create object
    let p1 = new pdf('result.pdf',"result text");
    p1.save();
});
server.listen(5000);
console.log("server is started...");