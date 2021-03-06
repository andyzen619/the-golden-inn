import React, { Fragment } from "react";
import "./LandingComponent.css";
import Media from "react-media";

import { Image, Header, Message } from "semantic-ui-react";

const LandingComponent = () => {
  return (
    <div className="divStyle" style={{ height: "250px" }}>
      <Image
        src="https://img1.wsimg.com/isteam/stock/107160/:/rs=h:1026"
        className="image"
        style={{ width: "100%", filter: "brightness(55%)" }}
      />
      <div
        style={{
          position: "relative",
          left: "50%",
          transform: "translate(-50%, -125%)",
          padding: "5%"
        }}
      >
        <Media
          queries={{
            small: "(max-width: 320px)"
          }}
        >
          {matches => (
            <Fragment>
              {matches.small && (
                <Header
                  size="huge"
                  style={{ color: "white", position: "absolute", top: "-40%" }}
                >
                  WELCOME TO THE GOLDEN INN
                </Header>
              )}
              {!matches.small && (
                <Header size="huge" style={{ color: "white" }}>
                  WELCOME TO THE GOLDEN INN
                </Header>
              )}
            </Fragment>
          )}
        </Media>

        <Header size="small" style={{ color: "white" }}>
          Serving authentic Chinese food for over 25 years
        </Header>
      </div>
    </div>
  );
};

export default LandingComponent;
