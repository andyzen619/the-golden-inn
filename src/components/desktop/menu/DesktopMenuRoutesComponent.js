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
      <Switch>
        <Route exact path="/menu">
          <Segment basic>
            <Header as="h1">Special Combinations Plates</Header>
            <Item.Meta>
              No substitutions within combinations plates. Get $1 off betwean
              11:30am-2pm
              <div>Prices are subject to change.**</div>
            </Item.Meta>
          </Segment>
          <div style={menuItemStyle}>
            <CombinationsComponent />
          </div>
        </Route>
        <Route path="/menu/combinations">
          <Segment basic>
            <Header as="h1">Special Combinations Plates</Header>
            <Item.Meta>
              No substitutions within combinations plates. Get $1 off betwean
              11:30am-2pm
              <div>Prices are subject to change.**</div>
            </Item.Meta>
          </Segment>
          <div style={menuItemStyle}>
            <CombinationsComponent />
          </div>
        </Route>
        <Route path="/menu/fullcourse">
          <Segment basic>
            <Header as="h1">Full Course Meals</Header>
            <Item.Meta>
              Appetizers cannot be substituted. Other substitutions require
              minimum $2.00 charge**.
              <div>Prices are subject to change.**</div>
            </Item.Meta>
          </Segment>
          <div style={menuItemStyle}>
            <FullcourseComponenet />
          </div>
        </Route>
        <Route path="/menu/soups">
          <Segment basic>
            <Header as="h1">Soups</Header>
            <Item.Meta>
              <div>Prices are subject to change.**</div>
            </Item.Meta>
          </Segment>
          <div style={menuItemStyle}>
            <SoupComponent />
          </div>
        </Route>
        <Route path="/menu/appetizers">
          <Segment basic>
            <Header as="h1">Appetizers</Header>
            <Item.Meta>
              <div>Prices are subject to change.**</div>
            </Item.Meta>
          </Segment>
          <div style={menuItemStyle}>
            <AppetizersComponent />
          </div>
        </Route>
        <Route path="/menu/rice">
          <Segment basic>
            <Header as="h1">Rice (One size only)</Header>
            <Item.Meta>
              <div>Prices are subject to change.**</div>
            </Item.Meta>
          </Segment>
          <div style={menuItemStyle}>
            <RiceComponent />
          </div>
        </Route>
        <Route path="/menu/eggFooYoung">
          <Segment basic>
            <Header as="h1">Egg Foo Young (Grilled)</Header>
            <Item.Meta>
              <div>Prices are subject to change.**</div>
            </Item.Meta>
          </Segment>
          <div style={menuItemStyle}>
            <EggFooYoungComponent />
          </div>
        </Route>
        <Route path="/menu/chowMein">
          <Segment basic>
            <Header as="h1">Chow Mein (Dry noodles)/Chop Suey</Header>
            <Item.Meta>
              <div>Prices are subject to change.**</div>
            </Item.Meta>
          </Segment>
          <div style={menuItemStyle}>
            <ChowMeinComponent />
          </div>
        </Route>
        <Route path="/menu/sweetAndSour">
          <Segment basic>
            <Header as="h1">Sweet and Sour</Header>
            <Item.Meta>
              <div>Prices are subject to change.**</div>
            </Item.Meta>
          </Segment>
          <div style={menuItemStyle}>
            <SweetAndSourComponent />
          </div>
        </Route>
        <Route path="/menu/vegtablesAndAlmonds">
          <Segment basic>
            <Header as="h1">Vegetables and Almonds</Header>
            <Item.Meta>
              <div>Prices are subject to change.**</div>
            </Item.Meta>
          </Segment>
          <div style={menuItemStyle}>
            <VegetablesAndAlmondsComponent />
          </div>
        </Route>
        <Route path="/menu/cantonese">
          <Segment basic>
            <Header as="h1">Cantonese Style</Header>
            <Item.Meta>
              <div>Prices are subject to change.**</div>
            </Item.Meta>
          </Segment>
          <div style={menuItemStyle}>
            <CantoneseComponent />
          </div>
        </Route>
        <Route path="/menu/canadian">
          <Segment basic>
            <Header as="h1">Canadian Dishes</Header>
            <Item.Meta>
              <div>Prices are subject to change.**</div>
            </Item.Meta>
          </Segment>
          <div style={menuItemStyle}>
            <CanadianComponent />
          </div>
        </Route>
      </Switch>
    </Sidebar.Pusher>
  );
};

export default DesktopMenuRoutesComponent;