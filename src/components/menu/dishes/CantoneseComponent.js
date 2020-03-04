import React, { useContext, Fragment } from "react";
import {
  Card,
  Header,
  List,
  Image,
  Popup,
  Item,
  Segment
} from "semantic-ui-react";
import { MenuContext } from "../../context/menu-context";
import Media from "react-media";
const CantoneseComponentComponent = () => {
  const [menu, setMenu] = useContext(MenuContext);

  const menuStyle = {
    display: 'flex',
    justifyContent: 'space-evenly'
  }

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
            <Segment.Group>
              {getCantoneseComponent().map(dish => {
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
                        textAlign="center"
                        color="green"
                        style={{
                          fontWeight: "400"
                        }}
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
            <div style={menuStyle}>
              <Item.Group
                style={{
                  background: "white",
                  padding: "5%",
                  boxShadow: "5px 5px 5px 5px black",
                  width: '60%'
                }}
                divided
              >
                {getCantoneseComponent().map(dish => {
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
                      {/* {dish.image && (
                      <Image
                        src={dish.image}
                        size="small"
                        rounded="true"
                        style={{ maxHeight: "150px", paddingLeft: '10px' }}
                      />
                    )} */}
                    </Item>
                  );
                })}
              </Item.Group>
            </div>
          )}
        </Fragment>
      )}
    </Media>
  );
};

export default CantoneseComponentComponent;
