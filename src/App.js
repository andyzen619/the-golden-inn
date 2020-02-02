import React from "react";
import "./App.css";

import LandingpageComponent from "./components/LandingComponent";
import VisitUsComponenet from "./components/VisitUsComponent";
import NavBarComponent from "./components/Navbar/NavbarComponent";

import {} from "semantic-ui-react";

function App() {
  return (
    <div style={{background: '#d9c8b5'}}>
      <NavBarComponent/>
      <LandingpageComponent/>
      <VisitUsComponenet/>
    </div>
  );
}

export default App;
