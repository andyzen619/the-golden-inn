import React, { useState, useEffect, useContext } from "react";
import { Segment, Card, Header, Container } from "semantic-ui-react";

import { MenuContext } from "../../context/menu-context";
import { app } from "firebase";

const AppetizersComponent = () => {
  const [menu, setMenu] = useContext(MenuContext);

  const getAppetizers = () => {
    if (menu.dishes) {
      let appetizers = menu.dishes.appetizers;
      return Object.values(appetizers);
    } else {
      return [];
    }
  };

  return (
    <Segment.Group>
      {getAppetizers().map(appetizer => {
        return (
          <Segment key ={appetizer.name}>
            <Card.Content>
              <Header as="h5" floated="right" color="green">
                {appetizer.price}
              </Header>
              <Card.Header>{appetizer.name}</Card.Header>
              {appetizer.description&&<Header size="small">{appetizer.description}</Header>}
            </Card.Content>
          </Segment>
        );
      })}
    </Segment.Group>
  );
};

export default AppetizersComponent;
