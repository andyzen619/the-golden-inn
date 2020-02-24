import React from "react";
import DesktopNavbarComponent from "../Navbar/desktop/DesktopNavbarComponent";
import { Image, Header } from "semantic-ui-react";
import LandingComponent from "../LandingComponent";

const LandingComponentStyle = {
  divStyle: {
    textAlign: "center",
    position: "relative",
    textShadow: "0 1px black",
    height: '700px'
  },
  imageStyle: {
    width: "100%",
    height: '500px',
    filter: "brightness(55%)",
    objectFit: 'cover'
  },
  textStyleContainer: {
    position: "relative",
          left: "50%",
          transform: "translate(-50%, -125%)",
          padding: "5%"
  },
  textStyle: {
    color: "white",
    fontSize: '2.3em'
  }
};

const DesktopLandingComponent = props => {
  const { divStyle, imageStyle, textStyle, textStyleContainer } = LandingComponentStyle;
  return (
    <div style={divStyle}>
      <Image
        src="https://img1.wsimg.com/isteam/stock/107160/:/rs=h:1026"
        className="image"
        style={imageStyle}
      />
      <div style={textStyleContainer}>
        <Header size="huge" style={textStyle}>
          WELCOME TO THE GOLDEN INN
        </Header>
        <Header size="small" style={textStyle}>
          Serving authentic Chinese food for over 25 years
        </Header>
      </div>
    </div>
  );
};

export default DesktopLandingComponent;
