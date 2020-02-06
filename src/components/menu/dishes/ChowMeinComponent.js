import React, { useContext } from "react";
import { Segment, Card, Header } from "semantic-ui-react";

import { MenuContext } from "../../context/menu-context";

const ChowMeinComponentComponent = () => {
  const [menu, setMenu] = useContext(MenuContext);

  const getChowMeinComponent = () => {
    if (menu.dishes) {
      let ChowMeinComponent = menu.dishes.chowMein;
      return Object.values(ChowMeinComponent);
    } else {
      return [];
    }
  };

  return (
    <Segment.Group>
      {getChowMeinComponent().map(dish => {
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

export default ChowMeinComponentComponent;
