import React, { useState, useEffect, useContext } from "react";
import { Segment, Card, Header, Container } from "semantic-ui-react";

import { MenuContext } from "../context/menu-context";

const DinnersComponent = () => {
  const [menu, setMenu] = useContext(MenuContext);

  const getDinners = () => {
    if(menu.dinners){
      let Dinners = menu.dinners;
      return Object.values(Dinners);
    }
    else{
      return []
    }
  };

  return (
    <div>
       <Segment.Group>
      {getDinners().map(dish => {
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
    </div>
  );
};

export default DinnersComponent;
