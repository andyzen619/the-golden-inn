import React, { useContext, Fragment } from "react";
import { Segment, Card, Header, Image, Item, Popup } from "semantic-ui-react";
import Media from "react-media";

import { MenuContext } from "../../../context/menuContext";

const ChowMeinComponentComponent = () => {
  const [menu] = useContext(MenuContext);

  const getChowMeinComponent = () => {
    if (menu.dishes) {
      let ChowMeinComponent = menu.dishes.chowMein;
      return Object.values(ChowMeinComponent);
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
              {getChowMeinComponent().map((dish) => {
                return (
                  <Segment key={dish.name}>
                    {dish.image && (
                      <Popup
                        trigger={
                          <Image
                            src={dish.image}
                            floated="right"
                            rounded
                            style={{ width: "60px" }}
                          />
                        }
                        hideOnScroll
                        flowing
                      >
                        <Image src={dish.image} size="medium" rounded />
                      </Popup>
                    )}
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Item.Group
                style={{
                  background: "white",
                  padding: "5%",
                  boxShadow: "5px 5px 5px 5px black",
                  width: "60%",
                }}
                divided
              >
                {getChowMeinComponent().map((dish) => {
                  return (
                    <Item key={dish.name}>
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
              <div style={{ width: "30%" }}>
                {getChowMeinComponent().map((dish) => {
                  return (
                    dish.image && (
                      <Image
                        src={dish.image}
                        size="large"
                        rounded
                        style={{
                          margin: "50px",
                          borderRadius: "25px",
                        }}
                        label={{
                          color: "brown",
                          content: dish.name,
                          icon: "food",
                          ribbon: "right",
                          size: "large",
                        }}
                      />
                    )
                  );
                })}
              </div>
            </div>
          )}
        </Fragment>
      )}
    </Media>
  );
};

export default ChowMeinComponentComponent;
