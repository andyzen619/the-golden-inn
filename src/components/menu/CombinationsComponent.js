import React, { Fragment, useContext } from "react";
import {
  Card,
  Header,
  List,
  Image,
  Popup,
  Item,
  Segment
} from "semantic-ui-react";
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
            <Segment.Group>
              {getCombinations().map(dish => {
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
                        <Header
                          as="h5"
                          color="grey"
                          style={{
                            display: "flex",
                            justifyContent: "space-between"
                          }}
                        >
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
                boxShadow: "5px 5px 5px 5px black"
              }}
              divided
            >
              {getCombinations().map(dish => {
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
                    {dish.image && (
                      <Image
                        src={dish.image}
                        size="small"
                        style={{ maxHeight: "150px", paddingLeft: '10px' }}
                      />
                    )}
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

export default CombinationsComponent;
