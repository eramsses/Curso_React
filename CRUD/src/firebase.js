import { initializeApp } from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDfOlYaSXfb7gH_t016C6GMkyA85PFzruY",
    authDomain: "crud-9c343.firebaseapp.com",
    projectId: "crud-9c343",
    storageBucket: "crud-9c343.appspot.com",
    messagingSenderId: "967745238493",
    appId: "1:967745238493:web:60ceac7381393ccaf2f234"
  }

  export const firebaseApp = initializeApp(firebaseConfig)
