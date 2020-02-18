import React, { useState } from "react";
import { Sidebar, Accordion, Icon} from "semantic-ui-react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

const SidebarComponentStyle = {
  sidebarStyle: { padding: " 1.4em" }
};

const SidebarComponent = () => {
  const [activeIndex, setActiveIndeex] = useState(0);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndeex(newIndex);
  };

  return (
    <Sidebar
      as={Accordion}
      animation="push"
      icon="labeled"
      vertical
      visible={true}
      width="wide"
      styled
    >
      <Accordion.Title>
        <Icon />
        Special Combination Plates
      </Accordion.Title>

      <Accordion.Title>
        <Icon />
        Full Course Dinners
      </Accordion.Title>

      <Accordion.Title
        active={activeIndex === 1}
        index={1}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Main Dishes
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 1} styled={false}>
        <Accordion style={{ boxShadow: "none" }}>
          <Accordion.Title>Soups</Accordion.Title>
          <Accordion.Title>Appetizers</Accordion.Title>
          <Accordion.Title>Rice (One size)</Accordion.Title>
          <Accordion.Title>Egg Foo Young (Grilled)</Accordion.Title>
          <Accordion.Title>Chow Mein/Chop Suey</Accordion.Title>
        </Accordion>
      </Accordion.Content>
    </Sidebar>
  );
};

export default SidebarComponent;
