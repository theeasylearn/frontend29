var express = require('express');
var connection = require('./connection.js').database;
var app = express();

//define route 
//purpose get all data 
//localhost:5000/data

//purpose get selected source data 
//example
// http://localhost:5000/data/Bhavnagar

//purpose get selected source and destination data 
//example
// http://localhost:5000/data/Bhavnagar/surat

app.get('/data/:source?/:destination?', function (request, response) {
    console.log(request.params.source);
    connection.then((db) => {
        var dbInstance = db.db('frontend29');
        var condition;
        if(request.params.source !== undefined && request.params.destination !== undefined)
            condition = {source:request.params.source,destination:request.params.destination};
        else if(request.params.source !== undefined)
            condition = {source:request.params.source};
        else 
            condition = {};

        dbInstance.collection('data').find(condition, {}).toArray(function (error, result) {
            if (error != null) {
                response.json([{ 'error': 'error occurred' }]);
                console.log(error.errmsg);
            }
            else
            {
                // let result = JSON.parse(JSON.stringify(result));
                result.unshift({'total':result.length});
                result.unshift({'error':'no'});
                response.json(result);
            }
        });
    })
        .catch((error) => {
            console.log('Failed to connect to the database:', error.message);
        });
});


app.listen(5000);
console.log('ready to accept request...');