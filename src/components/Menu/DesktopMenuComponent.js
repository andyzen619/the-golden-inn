import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Sidebar, Header, Segment } from "semantic-ui-react";
import SideBarComponent from "./DesktopSidebarComponent";
import CombinationsComponent from "./MenuItems/CombinationsComponent";

import DesktopMenuRouteComponent from "./DesktopMenuRoutesComponent";

const DesktopMenuComponentStyle = {
  sidebarContainerStyle: {
    height: "700px",
    backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),url("https://scontent-ort2-2.xx.fbcdn.net/v/t1.15752-9/90638527_2542059202721532_3598802648356093952_n.png?_nc_cat=106&_nc_sid=b96e70&_nc_ohc=c5iOBlIIPsUAX_z4-zw&_nc_ht=scontent-ort2-2.xx&oh=73412c67136a40e2e6151d3719d87da2&oe=5EA3FC74")`
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
