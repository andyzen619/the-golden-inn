import React, { useContext } from "react";
import { Segment } from "semantic-ui-react";

import MobileNavbarComponent from './MobileNavbarComponent';

const NavbarComponent = () => {
  return (
    <div>
      <Segment.Group>
        
        <MobileNavbarComponent/>

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
