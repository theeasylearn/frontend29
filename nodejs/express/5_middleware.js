var express = require('express');
var fs = require('fs');
var now = require('./mydatetime');
var app = express();
var filename = 'access-logs.txt';

//create 1st middleware
app.use(function(request,response,next){
    console.log('this is 1st middleware');
    let currentdate = now.getDate();
    let currenttime = now.getTime();

    //we will store each and every request url and its method and datetime into file
    var content = `\n request method ${request.method} request url ${request.url} date ${currentdate} time ${currenttime} ip = ${request.ip}`;
    
    fs.appendFile(filename, content, function (error) 
    {
        if(error==null)
            console.log('log generated')
        else 
            console.log(error);
    });
    next();
});

//create another middleware
app.use(function(request,response,next){
    console.log('this is 2nd middleware');
    
    next();
});

const ROUTE = "/contactus";

app.get(ROUTE,function(request,response){
    response.send('we have received get request for contact us page');
});

app.post(ROUTE,function(request,response){
    response.send('we have received post request for contact us page');
});

app.put(ROUTE,function(request,response){
    response.send('we have received put request for contact us page');
});

app.delete(ROUTE,function(request,response){
    response.send('we have received delete request for contact us page');
});

const PORTNO = 5000;
app.listen(PORTNO,function(error){
    if(error)
        console.log(error);
    else 
        console.log('ready to accept request');
});


