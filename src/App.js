import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
import { Message } from "semantic-ui-react";
import {
  doc,
  getDoc,
  orderBy,
  query,
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "./firebase";
import NavBarComponent from "./components/Navbar/NavbarComponent";
import MapComponent from "./components/MapComponent";
import DesktopMenuComponent from "./components/Menu/DesktopMenuComponent";
import DesktopLanding from "./components/Landing";
import DesktopVisitUs from "./components/VisitUs";
import { MenuItemContextProvider } from "./context/menuContext";
import { AppStyle } from "./constants";

export default function App() {
  const [banner, setBanner] = useState({
    visible: false,
    title: "",
    message: "",
  });

  const [isClosed, setClosed] = useState(true);

  useEffect(() => {
    const ref = doc(db, "messages", "bannerMessage");

    getDoc(ref).then((querySnapshot) => {
      const { message, title, visible } = querySnapshot.data();

      setBanner({
        message,
        title,
        visible,
      });
    });

    const q = query(collection(db, "config"), orderBy("createdAt", "desc"));

    getDocs(q).then((querySnapshot) => {
      const [latestConfig] = querySnapshot.docs;

      const data = latestConfig.data();

      const { isClosed } = Config(data);

      setClosed(isClosed);
    });
  }, []);

  return (
    <Router style={AppStyle.backgroundColor}>
      {!isClosed ? (
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
      ) : (
        <div
          style={AppStyle.backgroundColor}
          className="h-screen justify-center flex"
        >
          <div className="flex flex-col justify-center">
            <div className="text-2xl leading-loose">
              <div className="text-center p-4 text-white m-auto">
                WE ARE CLOSED :(
              </div>
              <div className="text-center p-4 text-white m-auto">
                WE APOLOGIZE FOR ANY INCONVENIENCE.
              </div>
              <div className="text-center p-4 text-white m-auto">
                HAVE A GREAT DAY!
              </div>
            </div>
          </div>
        </div>
      )}
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
}

const Config = (params) => {
  const data = {
    createdAt: params.createdAt,
    isClosed: params.isClosed,
  };

  return data;
};
