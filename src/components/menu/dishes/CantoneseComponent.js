import React, { useContext } from "react";
import { Segment, Card, Header } from "semantic-ui-react";

import { MenuContext } from "../../context/menu-context";

const CantoneseComponentComponent = () => {
  const [menu, setMenu] = useContext(MenuContext);

  const getCantoneseComponent = () => {
    if (menu.dishes) {
      let CantoneseComponent = menu.dishes.cantonese;
      return Object.values(CantoneseComponent);
    } else {
      return [];
    }
  };

  return (
    <Segment.Group>
      {getCantoneseComponent().map(dish => {
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

export default CantoneseComponentComponent;
