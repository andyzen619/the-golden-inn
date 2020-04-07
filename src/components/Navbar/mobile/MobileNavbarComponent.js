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
        background: "#b82e26",
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
        background: "#b82e26",
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
