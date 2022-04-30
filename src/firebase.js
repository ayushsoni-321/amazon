import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCuYtl2rihvcggd3ERTJgn7NAAmVTvyb9M",
  authDomain: "copy-9daa7.firebaseapp.com",
  projectId: "copy-9daa7",
  storageBucket: "copy-9daa7.appspot.com",
  messagingSenderId: "763607951270",
  appId: "1:763607951270:web:a755926596ee6a08d65167",
  measurementId: "G-YQQCHYQ00D"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };