import React, { useContext, Fragment } from "react";
import { Segment } from "semantic-ui-react";
import Media from "react-media";

import MobileNavbarComponent from "./mobile/MobileNavbarComponent";
import DesktopNavbarComponent from "./desktop/DesktopNavbarComponent";

import { MenuContext } from "../../context/menu-context";

const NavbarComponent = () => {
  const [menu] = useContext(MenuContext);

  return (
    <div>
      <Segment.Group>
        <Media queries={{ mobile: "(max-width: 467px)" }}>
          {(matches) => (
            <Fragment>
              {matches.mobile && (
                <div>
                  <MobileNavbarComponent menu={menu} />
                </div>
              )}
              {!matches.mobile && (
                <div>
                  <DesktopNavbarComponent menu={menu} />
                </div>
              )}
            </Fragment>
          )}
        </Media>
      </Segment.Group>
    </div>
  );
};

export default NavbarComponent;
