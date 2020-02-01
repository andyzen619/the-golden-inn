import React, { useState, useEffect } from "react";

import { Responsive, Segment } from "semantic-ui-react";

const NavbarComponent = () => {
  return (
    <div>
      <Segment.Group>
        <Responsive as={Segment} {...Responsive.onlyMobile}>
          Mobile
        </Responsive>
        <Responsive as={Segment} {...Responsive.onlyTablet}>
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
        </Responsive>
      </Segment.Group>
    </div>
  );
};

export default NavbarComponent;
