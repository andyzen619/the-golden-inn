import React, { useState, useEffect, useContext } from "react";
import { Segment, Card, Header, Container } from "semantic-ui-react";

import { MenuContext } from "../../context/menu-context";

const RiceComponent = () => {
  const [menu, setMenu] = useContext(MenuContext);

  const getRice = () => {
    let Rice = menu.dishes.Rice;
    return Object.values(Rice);
  };

  return (
    <div>
      <Segment.Group>
        {getRice().map((appetizer) => {
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

export default RiceComponent;
