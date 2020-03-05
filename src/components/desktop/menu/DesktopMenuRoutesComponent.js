import React, { useState } from "react";
import { Sidebar, Segment, Header, Item } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import CombinationsComponent from "../../menu/CombinationsComponent";
import FullcourseComponenet from "../../menu/FullCourseComponent";
import SoupComponent from "../../menu/dishes/SoupsComponent";
import AppetizersComponent from "../../menu/dishes/AppetizersComponent";
import RiceComponent from "../../menu/dishes/RiceComponent";
import EggFooYoungComponent from "../../menu/dishes/EggFooYoungComponent";
import ChowMeinComponent from "../../menu/dishes/ChowMeinComponent";
import SweetAndSourComponent from "../../menu/dishes/Sweet&SourComponent";
import VegetablesAndAlmondsComponent from "../../menu/dishes/VegetableAndAlmonds";
import CantoneseComponent from "../../menu/dishes/CantoneseComponent";
import CanadianComponent from "../../menu/CanadianDishesComponent";
const menuRouteStyle = {
  menuItemStyle: {
    paddingLeft: "50px",
    paddingRight: "300px",
    paddingTop: "50px",
    paddingBottom: "50px",
    height: "450px"
  }
};

const DesktopMenuRoutesComponent = () => {
  const { menuItemStyle } = menuRouteStyle;

  return (
    <Sidebar.Pusher style={{ padding: " 2% 5%", overflow: "auto" }}>
      <Route exact path="/the-golden-inn/menu">
        <Segment basic>
          <Header as="h1">Special Combinations Plates</Header>
          <Item.Meta>
            No substitutions within combinations plates. Get $1 off betwean
            11:30am-2pm
          </Item.Meta>
        </Segment>
        <div style={menuItemStyle}>
          <CombinationsComponent />
        </div>
      </Route>
      <Route path="/the-golden-inn/menu/combinations">
        <Segment basic>
          <Header as="h1">Special Combinations Plates</Header>
          <Item.Meta>
            No substitutions within combinations plates. Get $1 off betwean
            11:30am-2pm
          </Item.Meta>
        </Segment>
        <div style={menuItemStyle}>
          <CombinationsComponent />
        </div>
      </Route>
      <Route path="/the-golden-inn/menu/fullcourse">
        <Segment basic>
          <Header as="h1">Full Course Meals</Header>
          <Item.Meta>
            Appetizers cannot be substituted. Other substitutions require
            charge.
          </Item.Meta>
        </Segment>
        <div style={menuItemStyle}>
          <FullcourseComponenet />
        </div>
      </Route>
      <Route path="/the-golden-inn/menu/soups">
        <Segment basic>
          <Header as="h1">Soups</Header>
        </Segment>
        <div style={menuItemStyle}>
          <SoupComponent />
        </div>
      </Route>
      <Route path="/the-golden-inn/menu/appetizers">
        <Segment basic>
          <Header as="h1">Appetizers</Header>
        </Segment>
        <div style={menuItemStyle}>
          <AppetizersComponent />
        </div>
      </Route>
      <Route path="/the-golden-inn/menu/rice">
        <Segment basic>
          <Header as="h1">Rice (One size only)</Header>
        </Segment>
        <div style={menuItemStyle}>
          <RiceComponent />
        </div>
      </Route>
      <Route path="/the-golden-inn/menu/eggFooYoung">
        <Segment basic>
          <Header as="h1">Egg Foo Young (Grilled)</Header>
        </Segment>
        <div style={menuItemStyle}>
          <EggFooYoungComponent />
        </div>
      </Route>
      <Route path="/the-golden-inn/menu/chowMein">
        <Segment basic>
          <Header as="h1">Chow Mein (Dry noodles)/Chop Suey</Header>
        </Segment>
        <div style={menuItemStyle}>
          <ChowMeinComponent />
        </div>
      </Route>
      <Route path="/the-golden-inn/menu/sweetAndSour">
        <Segment basic>
          <Header as="h1">Sweet and Sour</Header>
        </Segment>
        <div style={menuItemStyle}>
          <SweetAndSourComponent />
        </div>
      </Route>
      <Route path="/the-golden-inn/menu/vegtablesAndAlmonds">
        <Segment basic>
          <Header as="h1">Vegetables and Almonds</Header>
        </Segment>
        <div style={menuItemStyle}>
          <VegetablesAndAlmondsComponent />
        </div>
      </Route>
      <Route path="/the-golden-inn/menu/cantonese">
        <Segment basic>
          <Header as="h1">Cantonese Style</Header>
        </Segment>
        <div style={menuItemStyle}>
          <CantoneseComponent />
        </div>
      </Route>
      <Route path="/the-golden-inn/menu/canadian">
        <Segment basic>
          <Header as="h1">Canadian Dishes</Header>
        </Segment>
        <div style={menuItemStyle}>
          <CanadianComponent />
        </div>
      </Route>
    </Sidebar.Pusher>
  );
};

export default DesktopMenuRoutesComponent;
