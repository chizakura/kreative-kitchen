import React, {Component} from 'react';
import './App.css';
import Search from "./Search.png";

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar-container">
                <form className="Search" onSubmit={this.props.handleSubmit}>
                    <img src={Search} alt = "Search"/>
                    <input className="text-box" type="text" placeholder="Example: Beef, Onion, Tomato" value={this.props.searchItems} onChange={this.props.handleChange}/>
                </form>
            </div>
        )
    }
}

export default SearchBar;