import React,{useState} from "react";
import { Accordion, Sidebar, Icon, Segment, Image, Header} from "semantic-ui-react";

const DesktopMenuComponentStyle = {
  sidebarContainerStyle : {height: '500px', background:'white'},
  sidebarStyle: {padding: ' 1.4em'}
}

const DesktopMenuComponent = () => {
  const {sidebarContainerStyle, sidebarStyle} = DesktopMenuComponentStyle;
  const [activeIndex, setActiveIndeex] = useState(0);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndex === index ? -1 : index

    setActiveIndeex( newIndex );

  }

  return (
    <Sidebar.Pushable style={sidebarContainerStyle}>
      <Sidebar
        as={Accordion}
        animation="push"
        icon="labeled"
        vertical
        visible={true}
        width="wide"
        style={sidebarStyle}
      >
         <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name='dropdown' />
          What is a dog?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={handleClick}
        >
          <Icon name='dropdown' />
          What kinds of dogs are there?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            There are many breeds of dogs. Each breed varies in size and
            temperament. Owners often select a breed of dog that they find to be
            compatible with their own lifestyle and desires from a companion.
          </p>
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
