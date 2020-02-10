import React, { useState, useEffect, useContext } from "react";
import { Segment, Card, Header, Container } from "semantic-ui-react";

import { MenuContext } from "../../context/menu-context";

const RiceComponent = () => {
  const [menu, setMenu] = useContext(MenuContext);

  const getRice = () => {
    if (menu.dishes) {
      let Rice = menu.dishes.Rice;
      return Object.values(Rice);
    } else {
      return [];
    }
  };

  return (
    <div>
      <Segment.Group>
        {getRice().map(dish => {
          return (
            <Segment key={dish.name}>
              <Card.Content>
                <Header
                  as="h4"
                  floated="right"
                  color="green"
                  style={{ fontWeight: "400" }}
                >
                  {dish.price}
                </Header>
                <Card.Header>
                  <Header as="h4">{dish.name}</Header>
                </Card.Header>
                {dish.description && (
                  <Header as="h5" color="grey">
                    {dish.description}
                  </Header>
                )}
              </Card.Content>
            </Segment>
          );
        })}
      </Segment.Group>
    </div>
  );
};

export default RiceComponent;
