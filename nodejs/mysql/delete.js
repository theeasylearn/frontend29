var connection = require("./connection.js");
var sql = "delete from products where id=1";
//run query
connection.con.query(sql,function(error,result){
    if(error!=null)
        console.log(error);
    else 
        console.log(result.affectedRows + ' product deleted');
});
