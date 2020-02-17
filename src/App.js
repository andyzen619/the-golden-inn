import React, { Fragment } from "react";
import Media from "react-media";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import LandingpageComponent from "./components/LandingComponent";
import DesktopLandingPageComponent from "./components/desktop/DesktopLandingComponent";
import VisitUsComponenet from "./components/VisitUsComponent";
import NavBarComponent from "./components/Navbar/NavbarComponent";
import MapComponent from "./components/MapComponent";
import DesktopVisitUsComponent from "./components/desktop/DesktopVisitUsComponent";

import { MenuItemContextProvider } from "./components/context/menu-context";

const AppStyle = {
  backgroundColor: { background: "#d9c8b5" }
}

const HomepageComponent = props => {

  const {backgroundColor} = AppStyle; 
  return (
    <Media queries={{ mobile: "(max-width: 467px)" }}>
      {matches => (
        <Fragment>
          {matches.mobile && (
            <div style={backgroundColor}>
              <LandingpageComponent />
              <VisitUsComponenet />
            </div>
          )}
          {!matches.mobile && (
            <div style={backgroundColor}>
              <DesktopLandingPageComponent />
              <DesktopVisitUsComponent />
            </div>
          )}
          <MapComponent />
        </Fragment>
      )}
    </Media>
  );
};

function App() {
  return (
    <Router>
      <div>
        <MenuItemContextProvider>
          <NavBarComponent />
        </MenuItemContextProvider>
      </div>

      <Switch>
        <Route exact path='/'>
          <HomepageComponent/>
        </Route>

        <Route exact path='/menu'>
          <div>Menu</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
