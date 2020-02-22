import React, { useEffect, useState } from "react";
import firebase from "firebase";

console.log(process.env.REACT_APP_FIREBASE_PROJECT_ID);

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIRE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
});

var db = firebase.firestore();

const MenuContext = React.createContext([{}, () => {}]);

const MenuItemContextProvider = (props) => {
  const [menu, setMenu] = useState({});

  useEffect(() => {
    db.collection("menu-items")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          setMenu(doc.data());
        });
      });
  }, []);
  return (
    <MenuContext.Provider value={[menu, setMenu]}>
      {props.children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuItemContextProvider };
