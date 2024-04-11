// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmgjAXU7UdV54HDBiV_mqZ7I6QdCuj0fo",
  authDomain: "near-balkan-films.firebaseapp.com",
  databaseURL: "https://near-balkan-films-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "near-balkan-films",
  storageBucket: "near-balkan-films.appspot.com",
  messagingSenderId: "903812505852",
  appId: "1:903812505852:web:984c137a2d3f1f58e5f779",
  measurementId: "G-5VCRYW81R0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);

/*
apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  */