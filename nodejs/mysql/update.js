var connection = require("./connection.js");
var sql = "update products set price='111000',quantity='99' where id=1";
//run query
connection.con.query(sql,function(error,result){
    if(error!=null)
        console.log(error);
    else 
        console.log(result.affectedRows + ' product updated');
});
