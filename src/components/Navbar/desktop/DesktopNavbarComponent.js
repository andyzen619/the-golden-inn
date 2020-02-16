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
    <Responsive as={Menu} {...Responsive.onlyComputer} style={divStyle} fluid>
      <Menu.Item position='right'>
        <MenuSearchComponent/>
      </Menu.Item>
    </Responsive>
  );
};

export default DesktopNavbarComponent;
