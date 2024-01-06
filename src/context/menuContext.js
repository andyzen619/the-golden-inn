import React, { useEffect, useState } from "react";
import { db } from '../firebase';

const MenuContext = React.createContext([{}, () => { }]);

const MenuItemContextProvider = (props) => {
  const [menu, setMenu] = useState({});

  useEffect(() => {
    db.collection("menu-items")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
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
