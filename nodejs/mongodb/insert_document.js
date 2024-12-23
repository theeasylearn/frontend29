var connection = require('./connection.js').database;

var object = {source:'Bhavnagar',destination:'sabarkantha',distance:180.25};

connection.then((db) => {
        var dbInstance = db.db('frontend29');
        dbInstance.collection('data').insertOne(object, function (error, response) {
            if (error != null) {
                console.log('There is some error in inserting the document:', error.message);
            } else {
                console.log('Document has been inserted successfully:', response.insertedId);
            }
            db.close(); // Close the connection after the operation
        });
    })
    .catch((error) => {
        console.log('Failed to connect to the database:', error.message);
    });