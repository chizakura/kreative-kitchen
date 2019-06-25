import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './SearchBar';
import Recipe from './Recipe';

class App extends Component {
  constructor() {
    super();

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
    console.log(res.data.hits)
  }

  render() {
    console.log(this.state.searchItems)
    console.log(this.state.searchItemsArr)
    return (
      <div className="App">
        <div className="nav">This is div</div>
        <SearchBar
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        />
        
        {this.state.recipeList.length === 0 ? 
          (<div>
            <h1>Enter an ingredient.</h1>
            <p>Entering more will narrow down your results.</p>
          </div>) : <Recipe/>
        }
      </div>
    )
  }
}

export default App;