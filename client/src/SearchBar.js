import React, {Component} from 'react';
import './App.css';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <input type="text" className="text-box" placeholder="Example: green pepper"/>
            </div>
        )
    }
}

export default SearchBar;