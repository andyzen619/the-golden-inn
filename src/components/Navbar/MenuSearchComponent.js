import _ from "lodash";
import faker from "faker";
import React, { Component, useContext } from "react";
import { Search, Grid, Header, Segment, Card, Image } from "semantic-ui-react";
import { MenuContext } from "../context/menu-context";
import './MenuSearchStyle.css'

const style = {
  position: "relative"
};

// const [menu, setMenu] = useContext(MenuContext);

const initialState = { isLoading: false, results: [], value: "" };

export default class SearchExampleStandard extends Component {
  state = initialState;
  static contextType = MenuContext;

  getAllDishes = menu => {
    const allDishes = menu.dishes;
    const allCombinations = menu.combinations;
    const allDinners = menu.dinners;
    const result = [];

    Object.values(allDishes).forEach(value => {
      Object.values(value).forEach(dish => {
        const newDishObj = {
          title: dish.name,
          description: dish.description,
          price: dish.price
        };
        result.push(newDishObj);
      });
    });
    Object.values(allCombinations).forEach(dish => {
      const newDishObj = {
        title: dish.name,
        description: dish.description,
        price: dish.price
      };
      result.push(newDishObj);
    });
    Object.values(allDinners).forEach(dish => {
      const newDishObj = {
        title: dish.name,
        description: dish.description,
        price: dish.price
      };
      result.push(newDishObj);
    });
    return result;
  };

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(this.getAllDishes(this.context[0]), isMatch)
      });
    }, 300);
  };
  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Grid>
        <Grid.Column width={4} style={style}>
          <div>
            <Search
              aligned={"left"}
              loading={isLoading}
              // onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, {
                leading: true
              })}
              results={results}
              value={value}
              {...this.props}
            ></Search>
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}
