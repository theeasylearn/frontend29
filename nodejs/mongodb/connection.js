var mongodb = require('mongodb');
var client = mongodb.MongoClient;
var databaseURL  = "mongodb://0.0.0.0:27017/frontend29";
//promise based function
var connectToDatabase = new Promise((resolve,reject) => {
    client.connect(databaseURL,(error,database) => {
        if(error!=null)
        {
            console.log(error.message,error.code);
            reject(error);
        }
        else 
        {
            console.log('database is connected.');
            resolve(database);
        }
    });  
})
module.exports.database = connectToDatabase;
