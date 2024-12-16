var connection = require('./connection.js').database;

var updatedObject = {$set:{source:'Bhavnagar',destination:'Baroda',distance:250.90,price:300}};
var condition = {source:'Bhavnagar'};
connection.then((db) => {
        var dbInstance = db.db('frontend29');
        dbInstance.collection('data').updateOne(condition,updatedObject, function (error, response) {
            if (error != null) {
                console.log('There is some error in inserting the document:', error.message);
            } else {
                console.log('Document has been updated successfully:', response.insertedId);
            }
            db.close(); // Close the connection after the operation
        });
    })
    .catch((error) => {
        console.log('Failed to connect to the database:', error.message);
    });