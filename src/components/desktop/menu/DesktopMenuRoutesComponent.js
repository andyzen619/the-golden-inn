import React from "react";
import { Sidebar, Segment, Header } from "semantic-ui-react";
import { Route } from "react-router-dom";
import CombinationsComponent from "../../menu/CombinationsComponent";
import FullcourseComponenet from "../../menu/FullCourseComponent";
import SoupComponent from "../../menu/dishes/SoupsComponent";
import AppetizersComponent from '../../menu/dishes/AppetizersComponent'
import RiceComponent from '../../menu/dishes/RiceComponent';
import EggFooYoungComponent from '../../menu/dishes/EggFooYoungComponent';
import ChowMeinComponent from '../../menu/dishes/ChowMeinComponent';
import SweetAndSourComponent from '../../menu/dishes/Sweet&SourComponent';
import VegetablesAndAlmondsComponent from '../../menu/dishes/VegetableAndAlmonds'
import CantoneseComponent from '../../menu/dishes/CantoneseComponent';

const menuRouteStyle = {
  menuItemStyle : { paddingLeft: "5%", paddingRight: "350px", height: '450px', overflow: 'auto' }
}

const DesktopMenuRoutesComponent = () => {

  const {menuItemStyle} = menuRouteStyle;
  return (
    <Sidebar.Pusher style ={{padding: ' 2% 5%'}}>
      <Route path="/menu/combinations">
        <Segment basic>
          <Header as="h3">Special Combinations Plates</Header>
        </Segment>
        <div style={menuItemStyle}>
          <CombinationsComponent />
        </div>
      </Route>
      <Route path="/menu/fullcourse">
        <Segment basic>
          <Header as="h3">Full Course Meals</Header>
        </Segment>
        <div style={menuItemStyle}>
          <FullcourseComponenet />
        </div>
      </Route>
      <Route path="/menu/soups">
        <Segment basic>
          <Header as="h3">Soups</Header>
        </Segment>
        <div style={menuItemStyle}>
          <SoupComponent />
        </div>
      </Route>
      <Route path="/menu/appetizers">
        <Segment basic>
          <Header as="h3">Appetizers</Header>
        </Segment>
        <div style={menuItemStyle}>
          <AppetizersComponent/>
        </div>
      </Route>
      <Route path="/menu/rice">
        <Segment basic>
          <Header as="h3">Rice</Header>
        </Segment>
        <div style={menuItemStyle}>
          <RiceComponent/>
        </div>
      </Route>
      <Route path="/menu/eggFooYoung">
        <Segment basic>
          <Header as="h3">Egg Foo Young (Grilled)</Header>
        </Segment>
        <div style={menuItemStyle}>
          <EggFooYoungComponent/>
        </div>
      </Route>
      <Route path="/menu/chowMein">
        <Segment basic>
          <Header as="h3">Chow Mein/Chop Suey</Header>
        </Segment>
        <div style={menuItemStyle}>
          <ChowMeinComponent/>
        </div>
      </Route>
      <Route path="/menu/sweetAndSour">
        <Segment basic>
          <Header as="h3">Sweet and Sour</Header>
        </Segment>
        <div style={menuItemStyle}>
          <SweetAndSourComponent/>
        </div>
      </Route>
      <Route path="/menu/vegtablesAndAlmonds">
        <Segment basic>
          <Header as="h3">Vegetables and Almonds</Header>
        </Segment>
        <div style={menuItemStyle}>
          <VegetablesAndAlmondsComponent/>
        </div>
      </Route>
      <Route path="/menu/cantonese">
        <Segment basic>
          <Header as="h3">Cantonese Style</Header>
        </Segment>
        <div style={menuItemStyle}>
          <CantoneseComponent/>
        </div>
      </Route>
      <Route path="/menu/canadian">
        <Segment basic>
          <Header as="h3">Canadian Dishes</Header>
        </Segment>
        <div style={menuItemStyle}>
          
        </div>
      </Route>
      
      
      
    </Sidebar.Pusher>
  );
};

export default DesktopMenuRoutesComponent;
