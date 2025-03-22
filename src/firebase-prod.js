// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyARPyJojGOhBaurs8OifYYFcEao6Owuv40",
    authDomain: "pos-coffee-shop-fa5bc.firebaseapp.com",
    projectId: "pos-coffee-shop-fa5bc",
    storageBucket: "pos-coffee-shop-fa5bc.firebasestorage.app",
    messagingSenderId: "142810266249",
    appId: "1:142810266249:web:38b5b5b294be663bbf6458"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
