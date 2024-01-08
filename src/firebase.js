// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";

// // Initialize Cloud Firestore through Firebase
// firebase.initializeApp({
//   apiKey: "AIzaSyCEjL7ZIpn9SUG8raac9BtH18ZONAD_3hc",
//   projectId: "the-golden-inn-restaurant",
// });

// export const db = firebase.firestore();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEjL7ZIpn9SUG8raac9BtH18ZONAD_3hc",
  projectId: "the-golden-inn-restaurant",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
