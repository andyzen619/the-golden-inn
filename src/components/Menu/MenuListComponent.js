import React, { useState } from "react";
import { Accordion, Icon, Header } from "semantic-ui-react";

import AppetizersComponent from "./MenuItems/AppetizersComponent";
import RiceComponent from "./MenuItems/RiceComponent";
import SweetAndSourComponent from "./MenuItems/Sweet&SourComponent";
import EggFooYoungComponent from "./MenuItems/EggFooYoungComponent";
import VegtablesAndAlmondsComponent from "./MenuItems/VegetableAndAlmonds";
import ChowMeinComponentComponent from "./MenuItems/ChowMeinComponent";
import CantoneseComponentComponent from "./MenuItems/CantoneseComponent";
import SoupsComponent from "./MenuItems/SoupsComponent";
import CombinationsComponent from "./MenuItems/CombinationsComponent";
import DinnersComponent from "./FullCourseComponent";
import CanadianComponent from "./MenuItems/CanadianDishesComponent";

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
        as={Header}
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
        as={Header}
      >
        <Icon name="dropdown" />
        Full Course Dinner
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 1}>
        <h6 style={{ margin: 0, left: "15px", position: "relative" }}>
          Minimum $2.00 charge for substitutions
        </h6>
        <DinnersComponent />
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 2}
        index={2}
        onClick={handleClick}
        as={Header}
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
        as={Header}
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
        as={Header}
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
        as={Header}
      >
        <Icon name="dropdown" />
        Egg Foo Young (grilled)
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 5}>
        <EggFooYoungComponent />
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 6}
        as={Header}
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
        as={Header}
        index={7}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Chow Mein/Chop Suey
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 7}>
        <ChowMeinComponentComponent />
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 8}
        as={Header}
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
        as={Header}
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
        as={Header}
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
