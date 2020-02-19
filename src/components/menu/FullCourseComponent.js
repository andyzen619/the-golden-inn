import React, { useState, Fragment, useContext } from "react";
import { Segment, Card, Header, Container } from "semantic-ui-react";
import Media from 'react-media'

import { MenuContext } from "../context/menu-context";

const DinnersComponent = () => {
  const [menu, setMenu] = useContext(MenuContext);

  const getDinners = () => {
    if (menu.dinners) {
      let Dinners = menu.dinners;
      return Object.values(Dinners);
    } else {
      return [];
    }
  };

  return (
    <Media queries={{ mobile: "(max-width: 467px)" }}>
      {matches => (
        <Fragment>
          {matches.mobile && (
            <Segment.Group>
            {getDinners().map(dish => {
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
           
          )}
          {!matches.mobile && (
            <Card.Group>
            {getDinners().map(dish => {
              return (
                <Card key={dish.name}>
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
                </Card>
              );
            })}
          </Card.Group>
            
          )}
        </Fragment>
      )}
    </Media>
  );
};

export default DinnersComponent;
