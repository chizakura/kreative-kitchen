import React, {Component} from 'react';
import './App.css';
import Search from "./Search.png";

class SearchBar extends Component {
    render() {
        return (
            <div className = "search-bar-container">
                <div className="Search">
                    <img src={Search} alt = "Search"/>
                <input type="text" className="text-box" placeholder="Example: Green Pepper"/>

                <div className = "ingredient-text">
                <div className = "enter-an-ingredient"> Enter an ingredient. </div>
                    <div className = "entering-more-will"> Entering more will narrow down your results.</div>
                </div>
            </div>
            </div>

        )
    }
}

export default SearchBar;