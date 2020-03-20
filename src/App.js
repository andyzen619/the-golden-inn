import React, { Fragment } from "react";
import Media from "react-media";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";

import LandingpageComponent from "./components/LandingComponent";
import DesktopLandingPageComponent from "./components/desktop/DesktopLandingComponent";
import VisitUsComponenet from "./components/VisitUsComponent";
import NavBarComponent from "./components/Navbar/NavbarComponent";
import MapComponent from "./components/MapComponent";
import DesktopVisitUsComponent from "./components/desktop/DesktopVisitUsComponent";
import DesktopMenuComponent from "./components/desktop/DesktopMenuComponent";

import { MenuItemContextProvider } from "./components/context/menu-context";

import {Message, Header} from 'semantic-ui-react';

const AppStyle = {
  backgroundColor: { background: "#d9c8b5" }
};

function initializeReactGA() {
  ReactGA.initialize("UA-160054958-1");
  ReactGA.pageview("/");
}

const HomepageComponent = props => {
  const { backgroundColor } = AppStyle;
  initializeReactGA();
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
    <Router style={AppStyle.backgroundColor}>
      <div style={AppStyle.backgroundColor}>
        <MenuItemContextProvider>
          <NavBarComponent />
          <Message
            warning
            style={{textAlign: 'center', margin: '0'}}
          >
            <Message.Header>Changes in Service</Message.Header>
            <p>
              We will only be doing{" "}
              <a style={{ fontSize: "1.2em", color: "black" }}>take-out</a> and
              are suspending all dine-in services to aid in slowing the COVID-19
              virus outbreak. We apologize for any inconvenience.
            </p>
          </Message>

          <Switch>
            <Route exact path="/">
              <HomepageComponent />
            </Route>

            <Route path="/menu">
              <DesktopMenuComponent />
            </Route>
          </Switch>
        </MenuItemContextProvider>
      </div>
    </Router>
  );
}

export default App;
