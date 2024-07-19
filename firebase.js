import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDO4cdvKU1Q1KE3RUUGqxGar4YFo-25aGQ",
  authDomain: "game-auth-44753.firebaseapp.com",
  projectId: "game-auth-44753",
  storageBucket: "game-auth-44753.appspot.com",
  messagingSenderId: "566073205160",
  appId: "1:566073205160:web:05af81f746ff17aaf5fd9d"
};

// Initialize Firebase
let app;
try {
  app = firebase.initializeApp(firebaseConfig);
} catch (error) {
  // Handle initialization error
  console.log('Firebase initialization error:', error);
}

const auth = app ? firebase.auth() : null;
export { auth };
