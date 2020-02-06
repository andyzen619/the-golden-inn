import React, { useState } from "react";
import { Accordion, Icon } from "semantic-ui-react";

import AppetizersComponent from "./dishes/AppetizersComponent";
import RiceComponent from "./dishes/RiceComponent";
import SweetAndSourComponent from "./dishes/Sweet&SourComponent";
import EggFooYoungComponent from "./dishes/EggFooYoungComponent";
import VegtablesAndAlmondsComponent from "./dishes/VegetableAndAlmonds";
import ChowMeinComponentComponent from "./dishes/ChowMeinComponent";
import CantoneseComponentComponent from "./dishes/CantoneseComponent";
import SoupsComponent from "./dishes/SoupsComponent";
import CombinationsComponent from "./CombinationsComponent";

const MenuListComponenet = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (e, index) => {
    if (index.index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index.index);
    }
  };

  return (
    <Accordion fluid styled>
      <Accordion.Title
        active={activeIndex === 0}
        index={0}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Appetizers
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 0}>
        <AppetizersComponent />
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 1}
        index={1}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Rice
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 1}>
        <RiceComponent/>
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 2}
        index={2}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Sweet And Sour
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 2}>
        <SweetAndSourComponent/>
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 3}
        index={3}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Egg Foo Young (grilled)
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 3}>
        <EggFooYoungComponent/>
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 4}
        index={4}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Vegetable and Almonds
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 4}>
        <VegtablesAndAlmondsComponent/>
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 5}
        index={5}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Chow Mein (dry noodles)/Chop Suey
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 5}>
        <ChowMeinComponentComponent/>
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 6}
        index={6}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Cantonese Style
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 6}>
        <CantoneseComponentComponent/>
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 7}
        index={7}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Soups
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 7}>
        <SoupsComponent/>
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 8}
        index={8}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Special Combination Plates
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 8}>
        <CombinationsComponent/>
      </Accordion.Content>
    </Accordion>
  );
};

export default MenuListComponenet;
