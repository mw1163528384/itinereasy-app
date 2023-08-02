const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const app = express();

const serviceAccount = require('./fs_cred/credentials.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Middleware
app.use(express.json()); // Body parser
app.use(cors()); // Handle CORS

// GET endpoint to retrieve data Scenarios 1/2/3 using /getData/1, /getData/2, or /getData/3
app.get('/getData/:scenario', (req, res) => {
  const scenario = req.params.scenario;

  if (scenario !== '1' && scenario !== '2' && scenario !== '3') {
    return res.status(400).json({ error: 'Invalid scenario number' });
  }

  db.collection(`Scenario ${scenario}`).get()
    .then(snapshot => {
      const data = snapshot.docs.map(doc => doc.data());
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

// POST endpoint to edit itineraries
app.post('/editItinerary', (req, res) => {
  const { id, updatedData } = req.body;

  db.collection('Scenario 1').doc(id).update(updatedData)
    .then(() => {
      res.status(200).json({ message: 'Itinerary updated successfully!' });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// HOW TO USE THE POST FN IN REACT:


// function editItinerary(id, updatedData) {
//   fetch('/editItinerary', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ id, updatedData }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log('Itinerary updated successfully:', data);
//       // You can update your component state here or navigate to another page
//     })
//     .catch((error) => {
//       console.error('Error updating itinerary:', error);
//       // Handle the error appropriately in your UI
//     });
// }