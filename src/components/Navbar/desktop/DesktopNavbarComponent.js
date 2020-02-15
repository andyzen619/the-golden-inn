import React, { Fragment } from "react";
import { Responsive, Menu} from "semantic-ui-react";
import MenuSearchComponent from "../MenuSearchComponent";

const DesktopNavbarComponent = () => {
  return (
    <Responsive as={Menu} {...Responsive.onlyComputer}>
      Computer
    </Responsive>
  );
};

export default DesktopNavbarComponent;
