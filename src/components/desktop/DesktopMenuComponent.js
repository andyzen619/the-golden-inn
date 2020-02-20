import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import {
  Sidebar,
} from "semantic-ui-react";
import SideBarComponent from "../desktop/menu/SidebarComponent";

import DesktopMenuRouteComponent from './menu/DesktopMenuRoutesComponent';

const DesktopMenuComponentStyle = {
  sidebarContainerStyle: { height: "600px", background: "url(https://img1.wsimg.com/isteam/stock/107160/:/rs=h:1080)" },
  sidebarStyle: { padding: " 1.4em" }
};

const DesktopMenuComponent = () => {
  const { sidebarContainerStyle } = DesktopMenuComponentStyle;

  return (
    <Router>
      <Sidebar.Pushable style={sidebarContainerStyle}>
        <SideBarComponent/>
        <DesktopMenuRouteComponent/>
      </Sidebar.Pushable>
    </Router>
  );
};

export default DesktopMenuComponent;
