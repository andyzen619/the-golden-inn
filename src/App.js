import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
import { Message } from "semantic-ui-react";

import { db } from './firebase'
import NavBarComponent from "./components/Navbar/NavbarComponent";
import MapComponent from "./components/MapComponent";
import DesktopMenuComponent from "./components/Menu/DesktopMenuComponent";
import DesktopLanding from "./components/Landing";
import DesktopVisitUs from "./components/VisitUs";
import { MenuItemContextProvider } from "./context/menuContext";
import { AppStyle } from './constants';

export default function App() {
  const [banner, setBanner] = useState({
    visible: false,
    title: "",
    message: "",
  });

  useEffect(() => {
    db.collection("messages")
      .doc("bannerMessage")
      .get()
      .then((querySnapshot) => {
        const { message, title, visible } = querySnapshot.data();

        setBanner({
          message,
          title,
          visible,
        });
      });
  }, []);

  return (
    <Router style={AppStyle.backgroundColor}>
      <div style={AppStyle.backgroundColor} className="font-advent">
        <MenuItemContextProvider>
          <NavBarComponent />
          {banner.visible && (
            <Message warning style={{ textAlign: "center", margin: "0" }}>
              <Message.Header>{banner.title}</Message.Header>
              <p className="font-sans">{banner.message}</p>
            </Message>
          )}
          <Switch>
            <Route exact path="/">
              <HomepageComponent />
            </Route>

            <Route path="/menu">
              <DesktopMenuComponent />
            </Route>
          </Switch>
        </MenuItemContextProvider>
        <a href="https://www.flaticon.com/free-icons/wok" title="wok icons">
          Wok icons created by Freepik - Flaticon
        </a>
      </div>
    </Router>
  );
}

function initializeReactGA() {
  ReactGA.initialize("UA-160054958-1");
  ReactGA.pageview("/");
}

function HomepageComponent() {
  const { backgroundColor } = AppStyle;
  initializeReactGA();
  return (
    <div style={backgroundColor}>
      <DesktopLanding />
      <DesktopVisitUs />
      <MapComponent />
    </div>
  );
};

