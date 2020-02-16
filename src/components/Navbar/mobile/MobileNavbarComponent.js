import React, { Fragment } from "react";
import { Responsive, Menu } from "semantic-ui-react";
import Media from "react-media";

import MenuComponent from "./MobileMenuComponent";
import MenuSearchComponent from "../MenuSearchComponent";

const SmallMobileComponent = () => {
  return (
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
      <MenuSearchComponent style={{ right: "100%", position: "relative" }} />
    </Responsive>
  );
};

const RegularMobileComponent = () => {
  return (
    <Responsive
      as={Menu}
      {...Responsive.onlyMobile}
      style={{
        background: "#d9c8b5",
        padding: "3%"
      }}
    >
      <MenuComponent />
      <MenuSearchComponent style={{ right: "100%", position: "relative" }} />
    </Responsive>
  );
};

const MobileNavBarComponent = menu => {
  return (
    <Media
      queries={{
        small: "(max-width: 320px)"
        // medium: "(min-width: 600px) and (max-width: 1199px)",
        // large: "(min-width: 1200px)"
      }}
    >
      {matches => (
        <Fragment>
          {matches.small && <SmallMobileComponent />}
          {!matches.small && <RegularMobileComponent />}
        </Fragment>
      )}
    </Media>
  );
};

export default MobileNavBarComponent;
