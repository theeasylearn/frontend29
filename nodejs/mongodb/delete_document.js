var connection = require('./connection.js').database;
var condition = {source:'Bhavnagar'};
connection.then((db) => {
        var dbInstance = db.db('frontend29');
        dbInstance.collection('data').deleteMany(condition, function (error, response) {
            if (error != null) {
                console.log('There is some error in deleting document:', error.message);
            } else {
                console.log('Documents has been deleted successfully:');
            }
            db.close(); // Close the connection after the operation
        });
    })
    .catch((error) => {
        console.log('Failed to connect to the database:', error.message);
    });