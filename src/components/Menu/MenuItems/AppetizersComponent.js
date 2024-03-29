import React, { useContext, Fragment } from "react";
import Media from "react-media";
import { Segment, Card, Header, Item, Image } from "semantic-ui-react";

import { MenuContext } from "../../../context/menuContext";

const AppetizersComponent = () => {
  const [menu] = useContext(MenuContext);

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
      {(matches) => (
        <Fragment>
          {matches.mobile && (
            <Segment.Group>
              {getAppetizers().map((dish) => {
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
            <Item.Group
              style={{
                background: "white",
                padding: "5%",
                boxShadow: "5px 5px 5px 5px black",
              }}
              divided
            >
              {getAppetizers().map((dish) => {
                return (
                  <Item key={dish.name}>
                    {dish.image && <Image src={dish.image} size="small" />}
                    <Card.Content>
                      <Header
                        as="h3"
                        floated="right"
                        color="green"
                        style={{ fontWeight: "400" }}
                      >
                        {dish.price}
                      </Header>
                      <Item.Header>
                        <Header as="h4">{dish.name}</Header>
                      </Item.Header>
                      {dish.description && (
                        <Item.Meta>{dish.description}</Item.Meta>
                      )}
                    </Card.Content>
                  </Item>
                );
              })}
            </Item.Group>
          )}
        </Fragment>
      )}
    </Media>
  );
};

export default AppetizersComponent;
