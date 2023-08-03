import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxWIo1yVcW5F39K5Tsg3Ct5ibl1EogRY4",
  authDomain: "itinereasy-main.firebaseapp.com",
  projectId: "itinereasy-main",
  storageBucket: "itinereasy-main.appspot.com",
  messagingSenderId: "874528304229",
  appId: "1:874528304229:web:8a2776fba4821543442a8c",
  measurementId: "G-HF7P1X1PQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;
