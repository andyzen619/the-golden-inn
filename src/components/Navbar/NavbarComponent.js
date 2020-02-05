import React, { useContext, useEffect } from "react";
import { Segment } from "semantic-ui-react";

import MobileNavbarComponent from "./mobile/MobileNavbarComponent";

import { MenuContext } from "../context/menu-context";

const NavbarComponent = ({ menuItems }) => {

  const [menu, setMenu] = useContext(MenuContext);

  return (
    <div>
      <Segment.Group>
        <MobileNavbarComponent menu={menu}/>

        {/* <Responsive as={Segment} {...Responsive.onlyTablet}>
          Tablet
        </Responsive>
        <Responsive as={Segment} {...Responsive.onlyComputer}>
          Computer
        </Responsive>
        <Responsive as={Segment} {...Responsive.onlyLargeScreen}>
          Large Screen
        </Responsive>
        <Responsive as={Segment} {...Responsive.onlyWidescreen}>
          Widescreen
        </Responsive> */}
      </Segment.Group>
    </div>
  );
};

export default NavbarComponent;
