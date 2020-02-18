import React, { useState } from "react";
import { Sidebar, Accordion, Icon, Menu } from "semantic-ui-react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

const SidebarComponentStyle = {
  sidebarContainerStyle: { background: "white" },
  sidebarStyle: { padding: " 1.4em", position: "relative" }
};

const SidebarComponent = () => {
  const [activeIndex, setActiveIndeex] = useState(0);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndeex(newIndex);
  };

  const { sidebarContainerStyle, sidebarStyle } = SidebarComponentStyle;
  return (
    <Accordion vertical>
      <Accordion.Title>Special Combination Plates</Accordion.Title>
      <Accordion.Title>Full Course Dinners</Accordion.Title>
      <Accordion.Title active={activeIndex === 2}
          index={2}
          onClick={handleClick}>
        <Accordion.Title>Main Dishes</Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <Menu animation="push" vertical="true" visible={true}>
            <Accordion.Title>
              <Icon />
              Soup
            </Accordion.Title>
            <Accordion.Title>
              <Icon />
              Appetizers
            </Accordion.Title>
            <Accordion.Title>
              <Icon />
              Rice
            </Accordion.Title>
            <Accordion.Title>
              <Icon />
              Sweet and Sour
            </Accordion.Title>
            <Accordion.Title>
              <Icon />
              Egg Foo Young (Grilled)
            </Accordion.Title>
            <Accordion.Title>
              <Icon />
              Vegetables and Almonds
            </Accordion.Title>
            <Accordion.Title>
              <Icon />
              Chow Mein (dry noodles)/Chop Suey
            </Accordion.Title>
            <Accordion.Title>
              <Icon />
              Cantonese Style
            </Accordion.Title>
            <Accordion.Title>
              <Icon />
              Canadian Dishes
            </Accordion.Title>
          </Menu>
        </Accordion.Content>
      </Accordion.Title>
    </Accordion>
  );
};

export default SidebarComponent;
