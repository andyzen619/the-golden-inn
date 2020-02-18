import React, { useState } from "react";
import {
  Accordion,
  Sidebar,
  Icon,
  Segment,
  Image,
  Header
} from "semantic-ui-react";

const DesktopMenuComponentStyle = {
  sidebarContainerStyle: { height: "600px", background: "white" },
  sidebarStyle: { padding: " 1.4em" }
};

const DesktopMenuComponent = () => {
  const { sidebarContainerStyle, sidebarStyle } = DesktopMenuComponentStyle;
  const [activeIndex, setActiveIndeex] = useState(0);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndeex(newIndex);
  };

  return (
    <Sidebar.Pushable style={sidebarContainerStyle}>
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
          <Accordion style={{boxShadow: 'none'}}>
            <Accordion.Title>
              Soups
            </Accordion.Title>
            <Accordion.Title>
              Appetizers
            </Accordion.Title>
            <Accordion.Title>
              Rice (One size)
            </Accordion.Title>
            <Accordion.Title>
              Egg Foo Young (Grilled)
            </Accordion.Title>
            <Accordion.Title>
              Chow Mein/Chop Suey
            </Accordion.Title>
          </Accordion>
        </Accordion.Content>
      </Sidebar>

      <Sidebar.Pusher>
        <Segment basic>
          <Header as="h3">Application Content</Header>
          <Image src="/images/wireframe/paragraph.png" />
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default DesktopMenuComponent;
