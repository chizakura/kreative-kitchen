import React, {Component} from 'react';

class Recipe extends Component {
    render() {
        return (
            <div className="recipe-box">
                <img height="95px" src={this.props.recipe.image} alt={this.props.recipe.label}/>
                <div className="recipe-details">
                    <p>{this.props.recipe.label}</p>
                    <p>{`${this.props.recipe.totalTime} minutes`}</p>
                </div>
            </div>
        )
    }
}

export default Recipe;