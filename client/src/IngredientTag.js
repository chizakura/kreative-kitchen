import React, {Component} from 'react';


class IngredientTag extends Component {
  constructor(props){
    super(props)
  }

  removeIngredientTag(index) {
    console.log("SUCCESS!")
    console.log(index)
    this.props.deleteIngredientTag(index);
    //search index of ^^
    //splice that item
  }
  render(){
    console.log(this.props)
      return (
        <div className="ingredient-tag-container">
          {this.props.searchItemsArr.map((item, index) => 
            <p className="ingredienttag-ingredienttag" key={index} id={index}>
              <div className="text-text">{item}</div>
              <span className="ingredienttag-x">
                <button className="ingredienttag-x" value={item} onClick={()=>{this.removeIngredientTag(index)}}>&times;</button>
              </span>
            </p>
          )}
        </div>
            
        )
    }
}

export default IngredientTag;