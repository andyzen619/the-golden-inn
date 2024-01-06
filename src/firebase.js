import firebase from "firebase";

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyCEjL7ZIpn9SUG8raac9BtH18ZONAD_3hc',
  projectId: 'the-golden-inn-restaurant',
});

export const db = firebase.firestore();