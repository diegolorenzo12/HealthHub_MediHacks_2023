// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys

console.log(process.env.firebaseapiKey);

/*
const firebaseConfig = {
  apiKey: process.env.firebaseapiKey,
  authDomain: process.env.firebaseauthDomain,
  databaseURL: process.env.firebasedatabaseURL,
  projectId: process.env.firebaseprojectId,
  storageBucket: process.env.firebasestorageBucket,
  messagingSenderId: process.env.firebasemessagingSenderId,
  appId: process.env.firebaseappId,
};
*/

const firebaseConfig = {
  apiKey: "AIzaSyBrjbIzv4YF03lL3CAPPLX4nurHpPiXV1o",
  authDomain: "new2-7973e.firebaseapp.com",
  databaseURL: "https://new2-7973e-default-rtdb.firebaseio.com",
  projectId: "new2-7973e",
  storageBucket: "new2-7973e.appspot.com",
  messagingSenderId: "134424328616",
  appId: "1:134424328616:web:7a9b003823cf04d3dcc59d"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
