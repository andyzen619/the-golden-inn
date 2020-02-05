import React, { useState, useEffect, useContext } from "react";
import { Segment, Card, Header, Container } from "semantic-ui-react";

import { MenuContext } from "../../context/menu-context";

const AppetizersComponent = () => {
  const [menu, setMenu] = useContext(MenuContext);

  const getAppetizers = () => {
    let appetizers = menu.dishes.appetizers;
    return Object.values(appetizers);
  };

  return (
    <div>
      <Segment.Group>
        {getAppetizers().map((appetizer) => {
          return (
            <Segment key={appetizer.name}>
              <Container>
                <Header as="h5" floated="right" color="green">
                  {appetizer.price}
                </Header>
                <div>
                  <Header as="h4">{appetizer.name}</Header>
                  <Card.Description>
                    {appetizer.description}
                  </Card.Description>
                </div>
              </Container>
            </Segment>
          );
        })}
      </Segment.Group>
    </div>
  );
};

export default AppetizersComponent;
