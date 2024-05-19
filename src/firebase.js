import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Add this import for authentication

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRyCno4y2inmJFxKtfv-kQtduKr5nO1qc",
  authDomain: "instag-solo-project.firebaseapp.com",
  databaseURL: "https://instag-solo-project-default-rtdb.firebaseio.com",
  projectId: "instag-solo-project",
  storageBucket: "instag-solo-project.appspot.com",
  messagingSenderId: "333996509925",
  appId: "1:333996509925:web:d00fb93890224d6b5ca20c",
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
const auth = firebase.auth();
// Use getAuth() for authentication

export { db, auth }; // exporting the database and authentication
