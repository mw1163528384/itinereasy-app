import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

///////////////////////////////////////////////////////////////////////////////////////

// Import required modules
const express = require('express');
const { MongoClient } = require('mongodb');

// Create an Express.js app
const app = express();
app.use(express.json());

// Define the MongoDB connection string
const connectionString = 'mongodb://localhost:27017/mydatabase';

// Define a route to handle form submissions
app.post('/submit-form', (req, res) => {
  // Get the form data from the request body
  const formData = req.body;

  // Connect to MongoDB
  MongoClient.connect(connectionString, (err, client) => {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
      res.status(500).json({ error: 'An error occurred while connecting to the database.' });
    } else {
      console.log('Connected to MongoDB');
      const db = client.db(); // Get a reference to the database
      const collection = db.collection('mycollection'); // Replace 'mycollection' with your desired collection name

      // Insert the form data into the collection
      collection.insertOne(formData, (err, result) => {
        if (err) {
          console.error('Error inserting document:', err);
          res.status(500).json({ error: 'An error occurred while storing the data.' });
        } else {
          console.log('Document inserted successfully:', result.insertedId);
          res.status(200).json({ message: 'Data stored successfully.' });
        }

        // Close the MongoDB connection
        client.close();
      });
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
