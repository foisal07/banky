import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


//Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.`REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDOAEy7_7JMw9i15A35WiQ7RzK3_6a-XFA",
  authDomain: "banky-ce6b3.firebaseapp.com",
  projectId: "banky-ce6b3",
  storageBucket: "banky-ce6b3.appspot.com",
  messagingSenderId: "409309766314",
  appId: "1:409309766314:web:8772645f447a718233a6d3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Services
const firestore = firebase.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.Timestamp;

export { firestore, auth, timestamp };
