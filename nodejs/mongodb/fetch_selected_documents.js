var connection = require('./connection.js').database;
//fetch all documents
connection.then((db) => {
        var dbInstance = db.db('frontend29');
        var condition = {source:'Bhavnagar'};
        dbInstance.collection('data').find(condition,{}).toArray(function(error,result){
            if(error!=null)
                console.log(error.errmsg);
            else 
                console.log(result);
        });
    })
    .catch((error) => {
        console.log('Failed to connect to the database:', error.message);
    });