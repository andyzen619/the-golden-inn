import React, { useState, useEffect, useContext } from "react";
import { Segment, Card, Header, Container } from "semantic-ui-react";

import { MenuContext } from "../../context/menu-context";

const RiceComponent = () => {
  const [menu, setMenu] = useContext(MenuContext);

  const getRice = () => {
    if(menu.dishes){
      let Rice = menu.dishes.Rice;
      return Object.values(Rice);
    }
    else{
      return []
    }
  };

  return (
    <div>
       <Segment.Group>
      {getRice().map(rice => {
        return (
          <Segment key ={rice.name}>
            <Card.Content>
              <Header as="h5" floated="right" color="green">
                {rice.price}
              </Header>
              <Card.Header>{rice.name}</Card.Header>
              {rice.description&&<Header as="h6" color='grey'>{rice.description}</Header>}
            </Card.Content>
          </Segment>
        );
      })}
    </Segment.Group>
    </div>
  );
};

export default RiceComponent;
