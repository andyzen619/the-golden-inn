import React from "react";
import "./App.css";

import LandingpageComponent from "./components/LandingComponent";
import VisitUsComponenet from "./components/VisitUsComponent";

import {} from "semantic-ui-react";

function App() {
  return (
    <div style={{background: '#d9c8b5'}}>
      <LandingpageComponent/>
      <VisitUsComponenet/>
    </div>
  );
}

export default App;
