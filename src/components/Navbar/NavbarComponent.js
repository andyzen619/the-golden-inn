import React, { useContext, Responsive } from "react";
import { Segment } from "semantic-ui-react";

import MobileNavbarComponent from "./mobile/MobileNavbarComponent";
import DesktopNavbarComponent from "./desktop/DesktopNavbarComponent";

import { MenuContext } from "../context/menu-context";

const NavbarComponent = ({ menuItems }) => {

  const [menu, setMenu] = useContext(MenuContext);

  return (
    <div>
      <Segment.Group>
        <MobileNavbarComponent menu={menu}/>
        <DesktopNavbarComponent menu ={menu}/>
      </Segment.Group>
    </div>
  );
};

export default NavbarComponent;