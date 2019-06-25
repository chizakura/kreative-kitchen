import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './SearchBar';
import Recipe from './Recipe';
import KreativeKitchen from './KreativeKitchen_Logo.png';
import Hamburger_Menu from './Hamburger_Menu.png';
import IngredientTag from './IngredientTag'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchItems: "",
      searchItemsArr: [],
      recipeList: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      searchItems: value,
      searchItemsArr: value.split(",")
    })
  }

  async handleSubmit(event) {
    event.preventDefault();
    const res = await axios(`https://api.edamam.com/search?q=${this.state.searchItems}&app_id=6c3aa117&app_key=0a7b9cbed799150826ba8a7d204a2382&time=1-60`);
    const list = res.data.hits.map(recipe => {
      return recipe.recipe
    })
    this.setState({
      recipeList: list,
      searchItems: ""
    })
  }

  render() {
    console.log(this.state.searchItems)
    console.log(this.state.recipeList)
    return (
      <div className="App">
        <div className="nav">
          <div className="Hamburger_Menu">
              <img src={Hamburger_Menu} alt = "Hamburger_Menu"/>
          </div>
          <div className="Kreative-Kitchen_Logo">
            <img src={KreativeKitchen} alt="Kreative-Kitchen_Logo"/>
          </div>
        </div>
        <SearchBar
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
          searchItems = {this.state.searchItems}
        />
       
        {this.state.recipeList.length === 0 ? 
          (<div>
            <div className="enter-an-ingredient">Enter an ingredient.</div>
            <div className="entering-more-will">Entering more will narrow down your results.</div>
          </div>) : 
          (<div>
            <IngredientTag/>
            <div className="recipe-box-container">
            {this.state.recipeList.map((recipe, index) => {
              return (
                <Recipe
                  key = {index}
                  recipe = {recipe}
                />
              )
            })}
            </div>
          </div>)
        }
      </div>
    )
  }
}

export default App;