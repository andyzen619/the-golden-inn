import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
import { Message } from "semantic-ui-react";

import NavBarComponent from "./components/Navbar/NavbarComponent";
import MapComponent from "./components/MapComponent";

import DesktopMenuComponent from "./components/desktop/DesktopMenuComponent";
import DesktopLandingV2 from "./components/desktop/DesktopLandingV2";
import DesktopVisitUsV2 from "./components/desktop/DesktopVisitUsV2";

import { MenuItemContextProvider, db } from "./components/context/menu-context";

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
      <MapComponent />
    </div>
  );
};

function App() {
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

export default App;
