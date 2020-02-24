import React from "react";
import { Responsive, Menu, Header, Image } from "semantic-ui-react";
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
      <Menu.Item style={{position: 'absolute', top: "5%", zIndex: "10"}}>
        <Link to="/">
          <Image size="small" src="https://i.imgur.com/7SBSyFL.png" />
        </Link>
      </Menu.Item>
      {/* <Menu.Item>
        <Link to="/">
          <Image size="tiny" src="https://i.imgur.com/wTWZiYT.png" />
        </Link>
      </Menu.Item> */}

      <Menu.Menu position="right">
        <Menu.Item name="Menu">
          <Link to="/menu">
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
