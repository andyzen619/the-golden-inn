import React, { Fragment } from "react";
import Media from "react-media";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";

import LandingpageComponent from "./components/LandingComponent";
// import DesktopLandingPageComponent from "./components/desktop/DesktopLandingComponent";
import VisitUsComponenet from "./components/VisitUsComponent";
import NavBarComponent from "./components/Navbar/NavbarComponent";
import MapComponent from "./components/MapComponent";
import DesktopVisitUsComponent from "./components/desktop/DesktopVisitUsComponent";
import DesktopMenuComponent from "./components/desktop/DesktopMenuComponent";
import DesktopLandingV2 from "./components/desktop/DesktopLandingV2";
import DesktopVisitUsV2 from "./components/desktop/DesktopVisitUsV2";

import { MenuItemContextProvider } from "./components/context/menu-context";

import { Message } from "semantic-ui-react";

const AppStyle = {
  backgroundColor: {
    backgroundImage: `linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ),url("https://scontent-ort2-2.xx.fbcdn.net/v/t1.15752-9/90638527_2542059202721532_3598802648356093952_n.png?_nc_cat=106&_nc_sid=b96e70&_nc_ohc=c5iOBlIIPsUAX_z4-zw&_nc_ht=scontent-ort2-2.xx&oh=73412c67136a40e2e6151d3719d87da2&oe=5EA3FC74")`
  }
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
              <DesktopLandingV2 />
              <DesktopVisitUsV2 />
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
          <Message warning style={{ textAlign: "center", margin: "0" }}>
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
