import React, { useContext, useEffect, Fragment } from "react";
import Media from "react-media";
import "./App.css";

import LandingpageComponent from "./components/LandingComponent";
import DesktopLandingPageComponent from "./components/desktop/DesktopLandingComponent";
import VisitUsComponenet from "./components/VisitUsComponent";
import NavBarComponent from "./components/Navbar/NavbarComponent";
import MapComponent from "./components/MapComponent";
import DesktopMenuComponent from "./components/desktop/DesktopMenuComponent";

import { MenuItemContextProvider } from "./components/context/menu-context";

import {} from "semantic-ui-react";
import DesktopVisitUsComponent from "./components/desktop/DesktopVisitUsComponent";

function App() {
  return (
    <div style={{ background: "#d9c8b5" }}>
      <MenuItemContextProvider>
        <NavBarComponent />
        <Media queries={{ mobile: "(max-width: 467px)" }}>
          {matches => (
            <Fragment>
              {matches.mobile && (
                <div>
                  <LandingpageComponent />
                  <VisitUsComponenet />
                </div>
              )}
              {!matches.mobile && (
                <div>
                  <DesktopLandingPageComponent />
                  <DesktopVisitUsComponent/>
                </div>
              )}
            </Fragment>
          )}
        </Media>
        <MapComponent />
      </MenuItemContextProvider>
    </div>
  );
}

export default App;
