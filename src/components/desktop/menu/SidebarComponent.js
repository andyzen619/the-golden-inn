import React, { useState } from "react";
import { Sidebar, Accordion, Icon } from "semantic-ui-react";
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
      styled
      style={{background: '#f0f0f0'}}
    >
      <Link to="/menu/combinations">
        <Accordion.Title>
          <Icon />
          Special Combination Plates
        </Accordion.Title>
      </Link>

      <Link to="/menu/fullcourse">
        <Accordion.Title>
          <Icon />
          Full Course Dinners
        </Accordion.Title>
      </Link>

      <Accordion.Title
        active={activeIndex === 1}
        index={1}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Main Dishes
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 1} styled={false}>
        <Accordion style={{ boxShadow: "none", background: '#f0f0f0' }}>
          <Link to="/menu/soups">
            <Accordion.Title>Soups</Accordion.Title>
          </Link>
          <Link to="/menu/appetizers">
            <Accordion.Title>Appetizers</Accordion.Title>
          </Link>
          <Link to="/menu/rice">
            <Accordion.Title>Rice (One size)</Accordion.Title>
          </Link>
          <Link to="/menu/eggFooYoung">
            <Accordion.Title>Egg Foo Young (Grilled)</Accordion.Title>
          </Link>
          <Link to="/menu/chowMein">
            <Accordion.Title>Chow Mein/Chop Suey</Accordion.Title>
          </Link>
          <Link to="/menu/sweetAndSour">
            <Accordion.Title>Sweet and Sour</Accordion.Title>
          </Link>
          <Link to="/menu/vegtablesAndAlmonds">
            <Accordion.Title>Vegetables and Almonds</Accordion.Title>
          </Link>
          <Link to="/menu/cantonese">
            <Accordion.Title>Cantonese Style</Accordion.Title>
          </Link>
          <Link to="/menu/canadian">
            <Accordion.Title>Canadian Dishes</Accordion.Title>
          </Link>
        </Accordion>
      </Accordion.Content>
    </Sidebar>
  );
};

export default SidebarComponent;
