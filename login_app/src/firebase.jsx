// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfG4oqzfu1qLnBUkHNZJbGE0-QPWLeXjY",
  authDomain: "syncee-login-7e119.firebaseapp.com",
  projectId: "syncee-login-7e119",
  storageBucket: "syncee-login-7e119.appspot.com",
  messagingSenderId: "187647530434",
  appId: "1:187647530434:web:cb2c3efdd60aea98fd325b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const auth = getAuth(app);

// Set the persistence to session
setPersistence(getAuth(app), browserSessionPersistence)
  .then(() => {
    console.log("Successfully set persistence");
  })
  .catch((error) => {
    console.log("Error setting persistence:", error);
  });

export const auth = getAuth(app);
export default app;