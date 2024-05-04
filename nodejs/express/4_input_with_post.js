var express = require("express")
var app = express();

//below 2 middleware are required to access input we passed in route
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//define post route
app.post("/login",function(request,response){
    let email = request.body.email;
    let password = request.body.password;
    console.log(email,password);
    if(email === undefined || password === undefined)
    {
        response.send("input is missing");

    }
    else if(email === "admin@gmail.com" && password === "123123")
    {
        response.send("login successfull");
    }
    else 
    {
        response.send("login failed....");
    }
});

app.all("*",function(request,response){
    response.status(404).send("Sorry, the requested resource was not found.");
});
app.listen(5000);
console.log('ready to accept request.');