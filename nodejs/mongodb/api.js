var express = require('express');
var connection = require('./connection.js').database;
var bodyParser = require("body-parser");
const { ObjectId } = require('mongodb');
var app = express();
//define middleware for accessing input.
app.use(express.urlencoded({ 'extended': true }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

const ROUTE = '/data'; //READ ONLY VARIABLE
//define route 
//purpose get all data 
//localhost:5000/data

//purpose get selected source data 
//example
// http://localhost:5000/data/Bhavnagar

//purpose get selected source and destination data 
//example
// http://localhost:5000/data/Bhavnagar/surat

app.get(ROUTE + '/:source?/:destination?', function (request, response) {
    console.log(request.params.source);
    connection.then((db) => {
        var dbInstance = db.db('frontend29');
        var condition;
        if (request.params.source !== undefined && request.params.destination !== undefined)
            condition = { source: request.params.source, destination: request.params.destination };
        else if (request.params.source !== undefined)
            condition = { source: request.params.source };
        else
            condition = {};

        dbInstance.collection('data').find(condition, {}).toArray(function (error, result) {
            if (error != null) {
                response.json([{ 'error': 'error occurred' }]);
                console.log(error.errmsg);
            }
            else {
                // let result = JSON.parse(JSON.stringify(result));
                result.unshift({ 'total': result.length });
                result.unshift({ 'error': 'no' });
                response.json(result);
            }
        });
    })
        .catch((error) => {
            console.log('Failed to connect to the database:', error.message);
        });
});

//purpose to insert new document into collection
//example
// http://localhost:5000/data
// method post
//content-type application/json
//body
// [{"name":"Book 1","author":"Author 1","price":25.99,"isbn":"978-1234567890"},{"name":"Book 2","author":"Author 2","price":19.95,"isbn":"978-0987654321"}]
app.post(ROUTE, function (request, response) {
    connection.then((db) => {
        var dbInstance = db.db('frontend29');
        var object = request.body;
        dbInstance.collection('data').insertMany(object, function (error, res) {
            if (error != null) {
                response.json([{ 'error': 'error occurred' }]);
                console.log(error.errmsg);
            } else {
                response.json([{ 'error': 'no' }, { 'message': 'Document has been inserted successfully' }]);
            }
        });
    })
        .catch((error) => {
            response.json([{ 'error': 'error occurred while connecting to database...' }]);
        });
})

//localhost:5000/data
//method put
//content-type application/json
//body
// [{"name":"Secret","author":"Unknown","price":75.21,"isbn":"111-22334455","id":"676432aabb5c0bd8295c18bc"}]
app.put(ROUTE, function (request, response) {
    var updatedObject = { $set: request.body[0] };
    var condition = { _id: new ObjectId(request.body[0]['id']) };
    connection.then((db) => {
        var dbInstance = db.db('frontend29');
        dbInstance.collection('data').updateOne(condition, updatedObject, function (error, res) {
            if (error != null) {
                response.json([{ 'error': 'error occurred' }]);
                console.log(error.errmsg);
            } else {
                response.json([{ 'error': 'no' }, { 'message': 'Document has been updated successfully' }]);
            }
        });
    })
        .catch((error) => {
            response.json([{ 'error': 'error occurred while connecting to database...' }]);
        });
});
//localhost:5000/data
//method delete
//content-type application/json
//body
// [{"id":"676432aabb5c0bd8295c18bc"}]
app.delete(ROUTE, function (request, response) {
    var condition = { _id: request.body[0]['id'] };
    connection.then((db) => {
        var dbInstance = db.db('frontend29');
        dbInstance.collection('data').deleteMany(condition, function (error, res) {
            if (error != null) {
                response.json([{ 'error': 'error occurred' }]);
            } else {
                response.json([{ 'error': 'no' }, { 'message': 'Document has been deleted successfully' }]); 
            }
        });
    })
        .catch((error) => {
            response.json([{ 'error': 'error occurred while connecting to database...' }]);
        });
});
app.listen(5000);
console.log('ready to accept request...');