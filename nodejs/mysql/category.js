var express = require("express");
var connection = require("./connection");
var bodyParser = require("body-parser");
var app = express(); // Move this line to the top
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); // Move this line after initializing app
const  ROUTE = "/category";

//fetch all categories
app.get(ROUTE,function(request,response){
    let sql = `select id,title,photo,islive from category where isdeleted=0 order by id desc`;
    connection.con.query(sql,function(error,result){
        if (error != null)
            response.json([{ 'error': 'error occured' }]);
        else 
        {
            result.unshift({'total':result.length});
            result.unshift({'error':'no'});
            response.json(result);
        }
    });
});

//insert category
app.post(ROUTE,function(request,response){
    var {title,photo} = request.body;
    if(title === undefined || photo === undefined)
        response.json([{'error':'input is missing'}]);
    else 
    {
        let sql = `insert into category (title,photo) values ('${title}','${photo}')`;
        connection.con.query(sql,function(error,result){
            if(error!=null)
                response.json([{ 'error': 'error occured' }]);
            else 
            {
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'category inserted' },]);
            }
        });
    }
});

//update category
app.put(ROUTE, function (request, response) {

});

//delete category
app.delete(ROUTE, function (request, response) {

});

app.listen(5000, function () {
    console.log("ready to accept requests");
});
