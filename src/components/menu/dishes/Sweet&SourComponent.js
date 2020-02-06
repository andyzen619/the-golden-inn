import React, { useContext } from "react";
import { Segment, Card, Header } from "semantic-ui-react";

import { MenuContext } from "../../context/menu-context";

const SweetAndSourComponent = () => {
  const [menu, setMenu] = useContext(MenuContext);

  const getSweetAndSour = () => {
    if (menu.dishes) {
      let SweetAndSour = menu.dishes['sweet&Sour'];
      return Object.values(SweetAndSour);
    } else {
      return [];
    }
  };

  return (
    <Segment.Group>
      {getSweetAndSour().map(dish => {
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

export default SweetAndSourComponent;
