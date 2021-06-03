import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCNJ7hegLx1ZjezENlEulQcnNEkuujBoz0",
    authDomain: "netflix-bunshin.firebaseapp.com",
    projectId: "netflix-bunshin",
    storageBucket: "netflix-bunshin.appspot.com",
    messagingSenderId: "733448203859",
    appId: "1:733448203859:web:cd76570798b9124ac420a6"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();


  export {auth};
  export  default db;