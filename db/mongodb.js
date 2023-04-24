const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'EcomDash';

async function dbConnection() {
 
}

module.exports = dbConnection;