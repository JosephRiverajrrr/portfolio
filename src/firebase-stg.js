import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC9NlYof4RjCY3a3yHkMaLLL9yKQ3IaH_M",
    authDomain: "pos-coffee-shop-stg.firebaseapp.com",
    projectId: "pos-coffee-shop-stg",
    storageBucket: "pos-coffee-shop-stg.firebasestorage.app",
    messagingSenderId: "720689085798",
    appId: "1:720689085798:web:70af07be00ee0e201adca7"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
