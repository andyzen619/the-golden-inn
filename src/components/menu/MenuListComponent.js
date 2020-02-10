import React, { useState } from "react";
import "./MenuListComponent.css"
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
import DinnersComponent from "./FullCourseComponent";
import CanadianComponent from "./CanadianDishesComponent";

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
    <Accordion fluid styled className={"accordian"}>
      <Accordion.Title
        active={activeIndex === 0}
        index={0}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Special Combination Plates
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 0}>
        <CombinationsComponent />
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 1}
        index={1}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Full Court Dinner
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 1}>
        <DinnersComponent/>
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 2}
        index={2}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Appetizers
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 2}>
        <AppetizersComponent />
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 3}
        index={3}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Rice (One size only)
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 3}>
        <RiceComponent />
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 4}
        index={4}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Sweet And Sour
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 4}>
        <SweetAndSourComponent />
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 5}
        index={5}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Egg Foo Young (grilled)
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 5}>
        <EggFooYoungComponent />
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 6}
        index={6}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Vegetable and Almonds
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 6}>
        <VegtablesAndAlmondsComponent />
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 7}
        index={7}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Chow Mein (dry noodles)/Chop Suey
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 7}>
        <ChowMeinComponentComponent />
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 8}
        index={8}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Cantonese Style
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 8}>
        <CantoneseComponentComponent />
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 9}
        index={9}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Soups
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 9}>
        <SoupsComponent />
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 10}
        index={10}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Canadian Dishes
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 10}>
        <CanadianComponent />
      </Accordion.Content>
    </Accordion>
  );
};

export default MenuListComponenet;
