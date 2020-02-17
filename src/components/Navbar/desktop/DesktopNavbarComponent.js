import React from "react";
import { Responsive, Menu, Header } from "semantic-ui-react";
import MenuSearchComponent from "../MenuSearchComponent";

import { Link } from "react-router-dom";

const DesktopNavbarComponentStyle = {
  divStyle: {
    background: "#d9c8b5",
    padding: "0 2em"
  }
};

const DesktopNavbarComponent = () => {
  const { divStyle } = DesktopNavbarComponentStyle;
  return (
    <Responsive
      as={Menu}
      {...Responsive.onlyComputer}
      style={divStyle}
      fluid
      secondary
    >
      <Menu.Item>
        <Link to='/'>
          <Header>The Golden Inn</Header>
        </Link>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item name="Menu">
          <Link to='/menu'>
            <Header as="h4">Menu</Header>
          </Link>
        </Menu.Item>
        <Menu.Item name="About">
          <Header as="h4">About</Header>
        </Menu.Item>
        <Menu.Item>
          <MenuSearchComponent />
        </Menu.Item>
      </Menu.Menu>
    </Responsive>
  );
};

export default DesktopNavbarComponent;
