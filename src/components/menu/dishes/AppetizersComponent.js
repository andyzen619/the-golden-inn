import React, { useContext } from "react";
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
    <Segment.Group>
      {getAppetizers().map(dish => {
        return (
          <Segment key ={dish.name}>
            <Card.Content>
              <Header as="h3" floated="right" color="green">
                {dish.price}
              </Header>
              <Card.Header><Header as="h4">{dish.name}</Header></Card.Header>
              {dish.description&&<Header as="h5" color='grey'>{dish.description}</Header>}
            </Card.Content>
          </Segment>
        );
      })}
    </Segment.Group>
  );
};

export default AppetizersComponent;
