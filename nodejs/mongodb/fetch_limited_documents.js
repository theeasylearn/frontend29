var connection = require('./connection.js').database;
//fetch first 2 documents as per condition
connection.then((db) => {
        var dbInstance = db.db('frontend29');
        var condition = {source:'Bhavnagar'};
        dbInstance.collection('data').find(condition,{}).limit(2).toArray(function(error,result){
            if(error!=null)
                console.log(error.errmsg);
            else 
                console.log(result);
        });
    })
    .catch((error) => {
        console.log('Failed to connect to the database:', error.message);
    });