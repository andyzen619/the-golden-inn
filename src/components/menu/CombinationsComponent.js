import React, { useState, Fragment, useContext } from "react";
import { Card, Header, List, Image, Popup } from "semantic-ui-react";
import { MenuContext } from "../context/menu-context";
import Media from "react-media";

const CombinationsComponent = () => {
  const [menu, setMenu] = useContext(MenuContext);

  const getCombinations = () => {
    if (menu.combinations) {
      let Combinations = menu.combinations;
      return Object.values(Combinations);
    } else {
      return [];
    }
  };

  return (
    <Media queries={{ mobile: "(max-width: 467px)" }}>
      {matches => (
        <Fragment>
          {matches.mobile && (
            <List>
              {getCombinations().map(dish => {
                return (
                  <List.Item key={dish.name} style={{ paddingTop: "5%" }}>
                    <Card.Content>
                      <Header
                        as="h4"
                        floated="right"
                        color="green"
                        style={{
                          fontWeight: "400",
                          position: "relative",
                          bottom: "25px"
                        }}
                      >
                        {dish.price}
                      </Header>
                      <Card.Header
                        style={{
                          position: "relative",
                          right: "15px",
                          bottom: "25px"
                        }}
                      >
                        <Popup
                          trigger={
                            <Image
                              avatar={true}
                              src={dish.image}
                              size="tiny"
                              floated="left"
                            />
                          }
                          hideOnScroll
                          flowing
                        >
                          <Image src={dish.image} size="medium" rounded />
                        </Popup>
                        <Header as="h4">{dish.name}</Header>
                      </Card.Header>
                      {dish.description && (
                        <Card.Description
                          style={{
                            display: "flex",
                            position: "relative",
                            bottom: "25px"
                          }}
                        >
                          <Header as="h5" color="grey">
                            {dish.description}
                          </Header>
                        </Card.Description>
                      )}
                    </Card.Content>
                  </List.Item>
                );
              })}
            </List>
          )}
          {!matches.mobile && (
            <Card.Group>
              {getCombinations().map(dish => {
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

export default CombinationsComponent;
