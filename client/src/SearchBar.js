import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <form onSubmit={this.props.handleSubmit}>
                    <input type="text" placeholder="Example: green pepper" value={this.props.searchItems} onChange={this.props.handleChange}/>
                </form>
            </div>
        )
    }
}

export default SearchBar;