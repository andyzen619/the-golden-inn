import React, { useState, Fragment, useContext } from "react";
import {
  Segment,
  Card,
  Header,
  Container,
  List,
  Item,
  Image
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
            <List>
              {getCombinations().map(dish => {
                return (
                  <List.Item key={dish.name} style={{paddingTop: '5%'}}>
                    <Card.Content>
                      <Header
                        as="h4"
                        floated="right"
                        color="green"
                        style={{ fontWeight: "400", position: 'relative', bottom:'25px' }}
                      >
                        {dish.price}
                      </Header>
                      <Card.Header style={{position: 'relative', right: '15px', bottom: '25px'}}>
                        <Image
                          avatar={true}
                          src="https://lh3.googleusercontent.com/RE7beBVICIcwh8t3jKUWicPiJOkzFu81-L1eXdVnBkpaN7uRdU5y-_MhqLpuA0HN5Ss9uWeentAAohxBWCWy8oV3r5846ePHSfU_ZMlN8snPkcgjgU5RQVxIkPixImpays84AoXSOWIt-quHJPAHYPd6OG8Qrq7jCGU7BWoVGzhnHf0JdOnlPPY1-RGPcu420aU_29RqW9z1qm_TLYyffj-gPWQyytt8PaRd5NZPGVSLEd3YD9Q9bJUYiopMpCPJr0xQdn96OHYTCsd7YsWYf2hI_fj4ptn54Bux9EQO4qRRLjXI1hBkCtbv-9qWp0QwX_-51UX9jRo5Q1vCtOMyGZSm7FRUxIlnWkLMTjbGO2AGtcOMXrXTJYbSTCZ1h1Nv-NYblvM6lWEp-XwAzP8DwIxTIcTf50JdWY20I0dZ_fOgd1AhuXNi4APB8OhSkS4DKpi1fiRGrDdac57CtwgAiP5yKentsTEU0CtL7SSkBlBwh5pAcRrfDpFTf0csVa2kd90AvfWiJW-RuOtHHZF214aM76g9R74Kq-UTi4jHTSxJJ39Oc7vbomOtGnPW_bxrX9AHMFeDQGUH9lU22RkzbOI4bXtqxpLX03cslRjLOrWVknPj8an3gZMUfM_L5oiXUbYLBYoduLl5wYx1rImwrKZ8HXrcSpWXRC3Ao7cqJ290wrhoI3rh0A=w1195-h865-no"
                          size="tiny"
                          floated="left"
                        />
                        <Header as="h4">{dish.name}</Header>
                      </Card.Header>
                      {dish.description && (
                        <Card.Description style={{display: 'flex', position: 'relative', bottom: '25px'}}>
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
