import React from "react";
import { Sidebar, Segment, div, Item } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import CombinationsComponent from "./MenuItems/CombinationsComponent";
import FullcourseComponenet from "./FullCourseComponent";
import SoupComponent from "./MenuItems/SoupsComponent";
import AppetizersComponent from "./MenuItems/AppetizersComponent";
import RiceComponent from "./MenuItems/RiceComponent";
import EggFooYoungComponent from "./MenuItems/EggFooYoungComponent";
import ChowMeinComponent from "./MenuItems/ChowMeinComponent";
import SweetAndSourComponent from "./MenuItems/Sweet&SourComponent";
import VegetablesAndAlmondsComponent from "./MenuItems/VegetableAndAlmonds";
import CantoneseComponent from "./MenuItems/CantoneseComponent";
import CanadianComponent from "./MenuItems/CanadianDishesComponent";
const menuRouteStyle = {
  menuItemStyle: {
    paddingLeft: "50px",
    paddingRight: "300px",
    paddingTop: "50px",
    paddingBottom: "50px",
    height: "450px",
  },
};

const DesktopMenuRoutesComponent = () => {
  const { menuItemStyle } = menuRouteStyle;

  return (
    <Sidebar.Pusher
      style={{ padding: " 2% 5%", overflow: "auto" }}
      className="text-white"
    >
      <Switch>
        <Route exact path="/menu">
          <Segment basic>
            <div className="text-4xl py-8">Special Combinations Plates</div>
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
            <div className="text-4xl py-8">Special Combinations Plates</div>
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
            <div className="text-4xl py-8">Full Course Meals</div>
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
            <div className="text-4xl py-8">Soups</div>
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
            <div className="text-4xl py-8">Appetizers</div>
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
            <div className="text-4xl py-8">Rice (One size only)</div>
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
            <div className="text-4xl py-8">Egg Foo Young (Grilled)</div>
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
            <div className="text-4xl py-8">
              Chow Mein (Dry noodles)/Chop Suey
            </div>
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
            <div className="text-4xl py-8">Sweet and Sour</div>
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
            <div className="text-4xl py-8">Vegetables and Almonds</div>
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
            <div className="text-4xl py-8">Cantonese Style</div>
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
            <div className="text-4xl py-8">Canadian Dishes</div>
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
