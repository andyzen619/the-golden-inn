import React, { useContext, Fragment } from "react";
import Media from 'react-media';
import { Segment, Card, Header } from "semantic-ui-react";

import { MenuContext } from "../../context/menu-context";

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

    <Media queries={{ mobile: "(max-width: 467px)" }}>
      {matches => (
        <Fragment>
          {matches.mobile && (
            <Segment.Group>
            {getAppetizers().map(dish => {
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
            {getAppetizers().map(dish => {
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

export default AppetizersComponent;
