var connection = require("./connection.js");
var sql = "insert into products (name,price,quantity,size,weight,description,photo)  values ('IPad',55000,110,'regular','1500gram','its most useful laptop','macbook-air.jpg')";
//run query
connection.con.query(sql,function(error,result){
    if(error!=null)
        console.log(error);
    else 
        console.log('a new product inserted with id ' + result.insertId);
});
