import React from "react";
import { Responsive, Menu, Header } from "semantic-ui-react";
import MenuSearchComponent from "../MenuSearchComponent";

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
      <Menu.Item name="The Golden Inn"></Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item name="Menu">
          <Header as="h4">Menu</Header>
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
