import React, { useState } from "react";
import { Sidebar, Accordion, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SidebarComponentStyle = {
  sidebarStyle: { padding: " 1.4em" }
};

const SidebarComponent = ({setDefaultFalse}) => {
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
      <Link to="/the-golden-inn/menu/combinations">
        <Accordion.Title onClick={setDefaultFalse}>
          <Icon />
          Special Combination Plates
        </Accordion.Title>
      </Link>

      <Link to="/the-golden-inn/menu/fullcourse">
        <Accordion.Title onClick={setDefaultFalse}>
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
          <Link to="/the-golden-inn/menu/soups">
            <Accordion.Title onClick={setDefaultFalse}>Soups</Accordion.Title>
          </Link>
          <Link to="/the-golden-inn/menu/appetizers">
            <Accordion.Title onClick={setDefaultFalse}>Appetizers</Accordion.Title>
          </Link>
          <Link to="/the-golden-inn/menu/rice">
            <Accordion.Title onClick={setDefaultFalse}>Rice (One size)</Accordion.Title>
          </Link>
          <Link to="/the-golden-inn/menu/eggFooYoung">
            <Accordion.Title onClick={setDefaultFalse}>Egg Foo Young (Grilled)</Accordion.Title>
          </Link>
          <Link to="/the-golden-inn/menu/chowMein">
            <Accordion.Title onClick={setDefaultFalse}>Chow Mein (Dry noodles)/Chop Suey</Accordion.Title>
          </Link>
          <Link to="/the-golden-inn/menu/sweetAndSour">
            <Accordion.Title onClick={setDefaultFalse}>Sweet and Sour</Accordion.Title>
          </Link>
          <Link to="/the-golden-inn/menu/vegtablesAndAlmonds">
            <Accordion.Title onClick={setDefaultFalse}>Vegetables and Almonds</Accordion.Title>
          </Link>
          <Link to="/the-golden-inn/menu/cantonese">
            <Accordion.Title onClick={setDefaultFalse}>Cantonese Style</Accordion.Title>
          </Link>
          <Link to="/the-golden-inn/menu/canadian">
            <Accordion.Title onClick={setDefaultFalse}>Canadian Dishes</Accordion.Title>
          </Link>
        </Accordion>
      </Accordion.Content>
    </Sidebar>
  );
};

export default SidebarComponent;