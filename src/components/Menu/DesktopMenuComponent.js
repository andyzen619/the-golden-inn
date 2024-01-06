import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Sidebar } from "semantic-ui-react";
import SideBarComponent from "./DesktopSidebarComponent";

import DesktopMenuRouteComponent from "./DesktopMenuRoutesComponent";

const DesktopMenuComponentStyle = {
  sidebarContainerStyle: {
    height: "100vh",
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
  const { sidebarContainerStyle } = DesktopMenuComponentStyle;

  const [, setIsDefault] = useState(true);

  const setDefaultFalse = () => {
    setIsDefault(false);
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
