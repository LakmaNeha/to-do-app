import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyDNUXne8qOnpGhRFue_DJnMPniMImyhhxo",
    authDomain: "to-do-fecb0.firebaseapp.com",
    projectId: "to-do-fecb0",
    storageBucket: "to-do-fecb0.appspot.com",
    messagingSenderId: "678704327676",
    appId: "1:678704327676:web:748ceaadb5de74c9836079"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export{ db };