import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC5oDMFcTBQBCdkq3g6QHi0duvWuYwP5VA",
    authDomain: "muso-ninjas-528e1.firebaseapp.com",
    projectId: "muso-ninjas-528e1",
    storageBucket: "muso-ninjas-528e1.appspot.com",
    messagingSenderId: "888308154854",
    appId: "1:888308154854:web:eb478f5182d04256aad627"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebaseApp.firestore()
  const projectAuth = firebaseApp.auth()

  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, projectAuth, timestamp }