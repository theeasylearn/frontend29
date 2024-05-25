var connection = require("./connection.js");
var sql = "select id,name,price,quantity from products order by id desc";
//run query
connection.con.query(sql,function(error,result){
    if(error!=null)
        console.log(error);
    else 
    {
        // console.log(result);
        var size = result.length;
        for(var index=0;index<size;index++)
        {
            console.log(result[index].id + "|" + result[index].name + "|" + result[index].price + result[index].quantity);
        }    
    }
});
