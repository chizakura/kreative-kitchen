import React, {Component} from 'react';

class Recipe extends Component {
    render() {
        return (
            <div className="recipe-box">
                <img src={this.props.recipe.image} alt={this.props.recipe.label}/>
                <div className="recipe-details">
                    <p className="recipe-title">{this.props.recipe.label}</p>
                    <p className="recipe-time">{`${this.props.recipe.totalTime} MINUTES`}</p>
                    <p className="recipe-summary">Summary of recipe</p>
                </div>
            </div>
        )
    }
}

export default Recipe;