import React, {Component} from 'react';

function removeIngredientTag(event) {
  console.log("SUCCESS!")
  console.log(event.target.value)
  //search index of ^^
  //splice that item
}

class IngredientTag extends Component {
  render(){
    console.log(this.props)
      return (
        <div className="ingredient-tag-container">
          {this.props.searchItemsArr.map((item, index) => 
            <p className="ingredienttag-ingredienttag" key={index}>
              {item}
              <span className="ingredienttag-x">
                <button className="ingredienttag-x" value={item} onClick={removeIngredientTag}>&times;</button>
              </span>
            </p>
          )}
        </div>
            
        )
    }
}

export default IngredientTag;