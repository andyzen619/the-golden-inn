import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";

import NavBarComponent from "./components/Navbar/NavbarComponent";
import MapComponent from "./components/MapComponent";

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
  ),url("https://firebasestorage.googleapis.com/v0/b/the-golden-inn-restaurant.appspot.com/o/goldenInnBackground.png?alt=media&token=c031b198-7ddc-4881-94e9-b61866bc15ca")`,
  },
};

function initializeReactGA() {
  ReactGA.initialize("UA-160054958-1");
  ReactGA.pageview("/");
}

const HomepageComponent = (props) => {
  const { backgroundColor } = AppStyle;
  initializeReactGA();
  return (
    <div style={backgroundColor}>
      <DesktopLandingV2 />
      <DesktopVisitUsV2 />
      <MapComponent/>
    </div>
  );
};

function App() {
  return (
    <Router style={AppStyle.backgroundColor}>
      <div style={AppStyle.backgroundColor} className='font-advent'>
        <MenuItemContextProvider>
          <NavBarComponent />
          <Message warning style={{ textAlign: "center", margin: "0" }}>
            <Message.Header>Changes in Service</Message.Header>
            <p className='font-sans'>
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
