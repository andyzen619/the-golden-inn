import React, { useContext, Fragment } from "react";
import { Card, Header, List, Image, Popup } from "semantic-ui-react";
import { MenuContext } from "../../context/menu-context";
import Media from "react-media";
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
    <Media queries={{ mobile: "(max-width: 467px)" }}>
      {matches => (
        <Fragment>
          {matches.mobile && (
            <List>
              {getCantoneseComponent().map(dish => {
                return (
                  <List.Item key={dish.name} style={{ paddingTop: "5%" }}>
                    <Card.Content style={{ left: "15px" }}>
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
                        <Card.Description>
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
            <Card.Group style={{ paddingBottom: "50px" }}>
              {getCantoneseComponent().map(dish => {
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

export default CantoneseComponentComponent;
