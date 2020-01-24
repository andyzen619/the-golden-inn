import React from "react";
import "./LandingComponent.css";

import { Image, Header } from "semantic-ui-react";

const LandingComponent = () => {
  return (
    <div>
      <Image src="https://img1.wsimg.com/isteam/stock/107160/:/rs=h:1028,m" className="image"/>
      <div className="divStyle">
        <Header size="huge" style={{color: 'white'}}>WELCOME TO THE GOLDEN INN</Header>
        <Header size="small" style={{color: 'white'}}>
          Serving authentic Chinese food for over 25 years
        </Header>
      </div>
    </div>
  );
};

export default LandingComponent;
