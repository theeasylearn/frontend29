var express = require('express');
var app = express();

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
