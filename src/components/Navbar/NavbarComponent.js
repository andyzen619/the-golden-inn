import React, { useState, useEffect, Fragment } from "react";

import MenuComponent from "./MenuComponent";
import MenuSearchComponent from "./MenuSearchComponent";

import { Responsive, Segment, Menu } from "semantic-ui-react";
import Media from "react-media";

const NavbarComponent = () => {
  return (
    <div>
      <Segment.Group>
        <Media
          queries={{
            small: "(max-width: 320px)"
            // medium: "(min-width: 600px) and (max-width: 1199px)",
            // large: "(min-width: 1200px)"
          }}
        >
          {matches => (
            <Fragment>
              {matches.small && (
                <Responsive
                  as={Menu}
                  {...Responsive.onlyMobile}
                  style={{
                    background: "#d9c8b5",
                    padding: "3%",
                    fontSize: ".90rem"
                  }}
                >
                  <MenuComponent />
                  <MenuSearchComponent />
                </Responsive>
              )}
              {!matches.small && (
                <Responsive
                  as={Menu}
                  {...Responsive.onlyMobile}
                  style={{
                    background: "#d9c8b5",
                    padding: "3%"
                  }}
                >
                  <MenuComponent />
                  <MenuSearchComponent />
                </Responsive>
              )}
            </Fragment>
          )}
        </Media>
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
