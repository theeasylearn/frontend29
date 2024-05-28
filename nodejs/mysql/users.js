var express = require('express');
var app = new express();
var connection = require("./connection");
//below 2 middleware are required to access input we passed in route
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/register", function (request, response) {
    var email = request.body.email;
    var password = request.body.password;
    var mobile = request.body.mobile;
    if (email === undefined || password === undefined || mobile === undefined) {
        response.json([{ 'error': 'required input missing' }]);
    }
    else {
        var sql = `insert into users (email,password,mobile) values ('${email}','${password}','${mobile}')`;
        connection.con.query(sql, function (error, result) {
            console.log(error);
            if (error !=null && error.code === 'ER_DUP_ENTRY') {
                response.json([{ 'error': 'no' }, { 'succcess': 'no' }, { 'message': 'email or mobile is already registered' }]);
            }
            else if(error!=null)
            {
                response.json([{ 'error': 'error occured' }]);
            }    
            else {
                response.json([{ 'error': 'no' }, { 'succcess': 'yes' }, { 'message': 'user registered successfully' }]);
            }
        });
    }
});

const PORT = 5000;
app.listen(PORT)
console.log("server is started....");