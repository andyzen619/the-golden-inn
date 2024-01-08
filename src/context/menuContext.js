import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase";

const MenuContext = React.createContext([{}, () => {}]);

const MenuItemContextProvider = (props) => {
  const [menu, setMenu] = useState({});

  useEffect(() => {
    const ref = collection(db, "menu-items");

    getDocs(ref).then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
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
