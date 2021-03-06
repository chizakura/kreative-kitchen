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
    this.deleteIngredientTag = this.deleteIngredientTag.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  deleteIngredientTag(index){
    let dup = [...this.state.searchItemsArr];
    dup.splice(index, 1);

    if(dup.length <= 0){
      this.setState({
        recipeList: []
      })
      return;
    }

    this.setState({
      searchItemsArr: dup,
      searchItems: dup.join(",")
    },this.fetchData)


  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      searchItems: value
    })
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.fetchData();
  }

  async fetchData(){
    const items = this.state.searchItems;
    const res = await axios(`https://api.edamam.com/search?q=${this.state.searchItems}&app_id=6c3aa117&app_key=0a7b9cbed799150826ba8a7d204a2382&time=1-60`);
    const list = res.data.hits.map(recipe => {
      return recipe.recipe
    })
    this.setState({
      recipeList: list,

    });
    if(this.state.searchItems.length > 0){
      this.setState({
        searchItemsArr: items.split(","),
        searchItems: ""
      })
    }
    console.log(this.state.searchItemsArr)
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
          <div className="menu-items">
            <a href="ingredients">MY INGREDIENTS</a>
            <a href="recipes">RECIPES</a>
          </div>
          <div className="Kreative-Kitchen_Logo">
            <img src={KreativeKitchen} alt="Kreative-Kitchen_Logo"/>
          </div>
          <div className="menu-items">
            <a href="account">ACCOUNT</a>
            <a href="search">SEARCH</a>
          </div>
        </div>
       <div className="before-search-container">
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
          (<div className="after-search-container">
            <IngredientTag
              searchItemsArr={this.state.searchItemsArr}
              deleteIngredientTag = {this.deleteIngredientTag}
            />
            <div className="number-results">{`${this.state.recipeList.length} results`}</div>
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
            </div>
          )
        }
      </div>
      </div>
    )
  }
}

export default App;