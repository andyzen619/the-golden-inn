import React, { useContext, useEffect } from "react";
import "./App.css";

import LandingpageComponent from "./components/LandingComponent";
import VisitUsComponenet from "./components/VisitUsComponent";
import NavBarComponent from "./components/Navbar/NavbarComponent";


import {MenuItemContextProvider} from "./components/context/menu-context";

import {} from "semantic-ui-react";

function App() {
  return (
    <div style={{ background: "#d9c8b5" }}>
      <MenuItemContextProvider>
        <NavBarComponent />
        <LandingpageComponent />
        <VisitUsComponenet />
      </MenuItemContextProvider>
    </div>
  );
}

export default App;
