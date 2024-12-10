var mongodb = require('mongodb');
var client = mongodb.MongoClient;
var databaseURL  = "mongodb://0.0.0.0:27017/frontend29";
client.connect(databaseURL,function(error,database){
    if(error!=null)
        console.log(error.message,error.code);
    else 
    {
        console.log('database is connected.');
    }

});
