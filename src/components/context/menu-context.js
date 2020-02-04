import React, { createContext, useEffect, useState } from "react";
import firebase from "firebase";
import firestore from "firebase/firestore";

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIRE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
});

var db = firebase.firestore();
const menuItems = db
  .collection("menu-items")
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(doc => {
      console.log(doc.data());
    });
  });

export const MenuContext = createContext(menuItems);

const MenuItemContextProvider = props => {
  useEffect(() => {}, []);
  return (
    <MenuContext.Provider value={menuItems}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuItemContextProvider;
