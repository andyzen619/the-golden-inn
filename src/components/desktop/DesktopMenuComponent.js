import React, { useState } from "react";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {
  Accordion,
  Sidebar,
  Icon,
  Segment,
  Image,
  Header
} from "semantic-ui-react";
import SideBarComponent from '../desktop/menu/SidebarComponent';

const DesktopMenuComponentStyle = {
  sidebarContainerStyle: { height: "600px", background: "white" },
  sidebarStyle: { padding: " 1.4em" }
};

const DesktopMenuComponent = () => {
  const { sidebarContainerStyle} = DesktopMenuComponentStyle;
  
  return (
    <Sidebar.Pushable style={sidebarContainerStyle}>
      <SideBarComponent/>
      <Sidebar.Pusher>
        <Segment basic>
          <Header as="h3">Application Content</Header>
          <Image src="/images/wireframe/paragraph.png" />
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default DesktopMenuComponent;
