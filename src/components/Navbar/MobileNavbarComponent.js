import React, { Fragment, useContext } from "react";
import { Responsive, Menu } from "semantic-ui-react";
import Media from "react-media";

import MenuComponent from "./MenuComponent";
import MenuSearchComponent from "./MenuSearchComponent";

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
      <MenuSearchComponent />
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
      <MenuSearchComponent />
    </Responsive>
  );
};

const MobileNavBarComponent = () => {
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
          {matches.small && <SmallMobileComponent/>}
          {!matches.small && <RegularMobileComponent />}
        </Fragment>
      )}
    </Media>
  );
};

export default MobileNavBarComponent;
