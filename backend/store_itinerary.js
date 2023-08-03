////////////  THIS FILE STORES STUFF IN THE DB

const admin = require('firebase-admin');

const serviceAccount = require('./fs_cred/credentials.json');

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://itinereasy-main.firebaseio.com'
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
const db = admin.firestore();

// Define the data
const itinerary = {
  
  "Food": [
    {"Cuisine": "Dutch", "Restaurant": "Restaurant De Kas", "Average Cost": 40},
    {"Cuisine": "Italian", "Restaurant": "Casa di David", "Average Cost": 30},
    {"Cuisine": "Swedish", "Restaurant": "Smorgastarta", "Average Cost": 25},
    {"Cuisine": "French", "Restaurant": "Brasserie Ambassade", "Average Cost": 35},
    {"Cuisine": "Seafood", "Restaurant": "The Seafood Bar", "Average Cost": 30},
    {"Cuisine": "Vegetarian", "Restaurant": "Golden Temple", "Average Cost": 20},
  ]


};

// Add a new document in collection "itineraries" with ID 'bali-trip'
async function saveItinerary() {
  try {
    // Add a new document in collection "itineraries" with ID 'bali-trip'
    const res = await db.collection('Scenario 4').doc('food_choices').set(itinerary);
    console.log('Itinerary saved:', res);
  } catch (error) {
    console.error('Error saving itinerary:', error);
  }
}

// Call the async function
saveItinerary();


