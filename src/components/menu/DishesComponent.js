import React, { useState, useEffect } from "react";
import { Segment, Card, Header, Container } from "semantic-ui-react";

import faker from "faker";
import _ from "lodash";

const source = _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, "$")
}));

const DishesComponenet = () => {
  useEffect(() => {
    console.log(source);
  }, []);

  return (
    <div>
      <Segment.Group >
        {source.map(item => {
          return (
            <Segment >
              <Container >
                <Header as="h5" floated="right" color="green">
                  $9.99
                </Header>
                <div>
                  <Header as="h4">Sweet and Sour Chicken Balls</Header>
                  <Card.Description>Amazing</Card.Description>
                </div>
              </Container>
            </Segment>
          );
        })}
      </Segment.Group>
    </div>
  );
};

export default DishesComponenet;
