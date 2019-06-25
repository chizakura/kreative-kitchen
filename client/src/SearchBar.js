import React, {Component} from 'react';
import './App.css';
import Search from "./Search.png";

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar-container">
                <form className="Search" onSubmit={this.props.handleSubmit}>
                    <img src={Search} alt = "Search"/>
                    <input type="text" placeholder="Example: green pepper" value={this.props.searchItems} onChange={this.props.handleChange}/>
                </form>
            </div>
        )
    }
}

export default SearchBar;