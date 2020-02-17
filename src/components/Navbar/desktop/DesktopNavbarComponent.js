import React, { Fragment } from "react";
import { Responsive, Menu } from "semantic-ui-react";
import MenuSearchComponent from "../MenuSearchComponent";
import DesktopVisitUsComponent from "../../desktop/DesktopVisitUsComponent";

const DesktopNavbarComponentStyle = {
  divStyle: {
    background: "#d9c8b5",
    padding: "0 2em"
  }
};

const DesktopNavbarComponent = () => {
  const { divStyle } = DesktopNavbarComponentStyle;
  return (
    <Responsive as={Menu} {...Responsive.onlyComputer} style={divStyle} fluid secondary>
      <Menu.Item name='The Golden Inn'/>
      <Menu.Menu position="right">
        <Menu.Item name="Menu">Menu</Menu.Item>
        <Menu.Item name="About">About Us</Menu.Item>
        <Menu.Item>
          <MenuSearchComponent />
        </Menu.Item>
      </Menu.Menu>
    </Responsive>
  );
};

export default DesktopNavbarComponent;
