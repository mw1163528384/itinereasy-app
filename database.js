const sqlite3 = require('sqlite3').verbose();
const { MongoClient } = require('mongodb');

const db = new sqlite3.Database('./backend/database.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

module.exports = db;


const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log('Connected to the MongoDB database.');
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = { client, connect };
