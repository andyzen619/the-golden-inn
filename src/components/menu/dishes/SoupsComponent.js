import React, { useContext } from "react";
import { Segment, Card, Header } from "semantic-ui-react";

import { MenuContext } from "../../context/menu-context";

const SoupsComponent = () => {
  const [menu, setMenu] = useContext(MenuContext);

  const getSoupsComponent = () => {
    if (menu.dishes) {
      let SoupsComponent = menu.dishes.soups;
      return Object.values(SoupsComponent);
    } else {
      return [];
    }
  };

  return (
    <Segment.Group>
      {getSoupsComponent().map(dish => {
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
  );
};

export default SoupsComponent;
