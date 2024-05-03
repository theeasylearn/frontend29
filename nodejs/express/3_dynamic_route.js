//example of dynamic route in expressjs
var express = require("express")
var app = express();
//define dynamic route
//how to send request for dynamic route
//http://127.0.0.1:5000/15/2
//? after parameter name means parameter is optional(request can be received without parameter)
app.get("/add/:num1?/:num2?",function(request,response)
{
    let num1 = request.params.num1;
    let num2 = request.params.num2;
    if(num1 === undefined || num2 === undefined)
        response.send('please give 2 required input');
    else 
    {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        let addition = num1 + num2;
        response.send(`addition = ${addition}`);
    }
});

app.get("/sub/:num1/:num2",function(request,response){
    let num1 = parseInt(request.params.num1);
    let num2 = parseInt(request.params.num2);
    let sub = num1 - num2;
    response.send(`subtraction = ${sub}`);
});

app.get("/mul/:num1/:num2",function(request,response){
    let num1 = parseInt(request.params.num1);
    let num2 = parseInt(request.params.num2);
    let multiplication = num1 * num2;
    response.send(`multiplication = ${multiplication}`);
});

app.get("/div/:num1/:num2",function(request,response){
    let num1 = parseInt(request.params.num1);
    let num2 = parseInt(request.params.num2);
    let division = num1 / num2;
    response.send(`division = ${division}`);
});

//define route which will execute call back function when request is received for non-existing route
app.all("*",function(request,response){
    response.status(404).send("Sorry, the requested resource was not found.");
});
app.listen(5000);
console.log('ready to accept request.');