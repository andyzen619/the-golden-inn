import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Sidebar, Header, Segment } from "semantic-ui-react";
import SideBarComponent from "../desktop/menu/SidebarComponent";
import CombinationsComponent from "../menu/CombinationsComponent";

import DesktopMenuRouteComponent from "./menu/DesktopMenuRoutesComponent";

const DesktopMenuComponentStyle = {
  sidebarContainerStyle: {
    height: "700px",
    background: "url(https://img1.wsimg.com/isteam/stock/107160/:/rs=h:1080)"
  },
  sidebarStyle: { padding: " 1.4em" },
  menuItemStyle: {
    paddingLeft: "50px",
    paddingRight: "300px",
    paddingTop: "50px",
    paddingBottom: "50px",
    height: "450px",
    width: "1700px"
  }
};

const DesktopMenuComponent = () => {
  const { sidebarContainerStyle, menuItemStyle } = DesktopMenuComponentStyle;

  const [isDefault, setIsDefault] = useState(true);

  const setDefaultFalse = () => {
    console.log("TURNING OFF DEFAULT");
    setIsDefault(false);
  };

  const getDefault = () => {
    if (isDefault) {
      return (
        <div
          style={{
            position: "absolute",
            zIndex: "10",
            left: "20%",
            // overflow: "auto",
            height: "500px",
            top: "8%"
          }}
        >
          <Segment basic>
            <Header as="h3">Special Combinations Plates</Header>
          </Segment>
          <div style={menuItemStyle}>
            <CombinationsComponent />
          </div>
        </div>
      );
    }
  };

  return (
    <Router>
      <Sidebar.Pushable style={sidebarContainerStyle}>
        <SideBarComponent setDefaultFalse={setDefaultFalse} />
        <DesktopMenuRouteComponent />
      </Sidebar.Pushable>
    </Router>
  );
};

export default DesktopMenuComponent;
