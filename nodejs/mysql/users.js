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
            if (error != null && error.code === 'ER_DUP_ENTRY') {
                response.json([{ 'error': 'no' }, { 'succcess': 'no' }, { 'message': 'email or mobile is already registered' }]);
            }
            else if (error != null) {
                response.json([{ 'error': 'error occured' }]);
            }
            else {
                response.json([{ 'error': 'no' }, { 'succcess': 'yes' }, { 'message': 'user registered successfully' }]);
            }
        });
    }
});

//login
app.post("/login", function (request, response) {
    var email = request.body.email;
    var password = request.body.password;
    if (email === undefined || password === undefined) {
        response.json([{ 'error': 'required input missing' }]);
    }
    else {
        var sql = `select * from users where email='${email}' and password='${password}'`;
        connection.con.query(sql, function (error, result) {
            if (error != null) {
                response.json([{ 'error': 'error occured' }]);
            }
            else {
                if (result.length == 0) {
                    response.json([{ 'error': 'no' }, { 'succcess': 'no' }, { 'message': 'invalid login attampt' }]);
                }
                else {
                    response.json([{ 'error': 'no' }, { 'succcess': 'yes' }, { 'message': 'login successfull' }, { 'id': result[0].id }]);
                }
            }
        });
    }
});
app.post("/change-password",function(request,response){
    var id = request.body.id;
    var oldpassword = request.body.oldpassword;
    var newpassword = request.body.newpassword;
    if(id === undefined || oldpassword === undefined || newpassword === undefined)
    {
        response.json([{ 'error': 'required input missing' }]);
    }    
    else 
    {
        var sql = `select id from users where id=${id} and password='${oldpassword}'`;
        connection.con.query(sql,function(error,result){
            if(error!=null)
            {
                response.json([{ 'error': 'error occured' }]);
            }
            else 
            {
                if(result.length==0)
                {
                    response.json([{ 'error': 'no' }, { 'succcess': 'no' }, { 'message': 'invalid old password' }]);
                }    
                else 
                {
                    var sql2 = `update users set password='${newpassword}' where id=${id}`;
                    connection.con.query(sql2,function(error2,result2){
                        if(error2!=null)
                        {
                            response.json([{ 'error': 'error occured' }]);
                        }    
                        else 
                        {
                            response.json([{ 'error': 'no' }, { 'succcess': 'yes' }, { 'message': 'password updated successfully' }]);
                        }
                    });
                }
            }   
        });
    }
});
const PORT = 5000;
app.listen(PORT)
console.log("server is started....");