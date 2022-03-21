import { initializeApp } from '@firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseApp = initializeApp({
    apiKey: "AIzaSyBtMeX__Wth46ThjXFRjorUSfR62bv1UXk",
    authDomain: "herald-message.firebaseapp.com",
    projectId: "herald-message",
    storageBucket: "herald-message.appspot.com",
    messagingSenderId: "778007852421",
    appId: "1:778007852421:web:286de39fe7060e7c2740ec",
    measurementId: "G-B3YRZ1P8N4"
})

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);


export { auth, db }