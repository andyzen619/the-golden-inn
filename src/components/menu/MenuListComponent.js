import React, { useState, useEffect } from "react";
import {Accordion, Icon} from 'semantic-ui-react';

const MenuListComponenet = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, index) => {
    console.log(index);
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
        Dishes
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 0}>
        
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 1}
        index={1}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Combination Plates
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 1}>
        
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 2}
        index={2}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Full Course Dinner
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 2}>
        
      </Accordion.Content>
    </Accordion>
  );
};

export default MenuListComponenet;
