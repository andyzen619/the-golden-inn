import React from "react";
import { Accordion } from "semantic-ui-react";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import CombinationsComponent from "../../menu/CombinationsComponent";
import SidebarComponenent from "./SidebarComponent";

const DesktopMenuComponentStyle = {
  menuStyle: {
    display: "inline-grid",
    maxHeight: "600px",
    overflow: "auto",
    overflowX: "auto"
  }
};

const DesktopMenuComponent = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div style={{position: 'relative', height: '500px'}}>
        <SidebarComponenent />
      </div>
      <CombinationsComponent />
    </div>
  );
};

export default DesktopMenuComponent;
