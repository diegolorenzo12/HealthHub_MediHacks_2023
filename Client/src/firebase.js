// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys

console.log(process.env.firebaseapiKey);


const firebaseConfig = {
  apiKey: process.env.firebaseapiKey,
  authDomain: process.env.firebaseauthDomain,
  databaseURL: process.env.firebasedatabaseURL,
  projectId: process.env.firebaseprojectId,
  storageBucket: process.env.firebasestorageBucket,
  messagingSenderId: process.env.firebasemessagingSenderId,
  appId: process.env.firebaseappId,
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
