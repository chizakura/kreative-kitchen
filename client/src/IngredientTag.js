import React, {Component} from 'react';
import './App.css';


function removeIngredientTag(event){
console.log("SUCCESS!")
console.log(event.target.value)
//search index of ^^
//splice that item
}

class IngredientTag extends Component {
  constructor(props){
  super(props);
  }
    render() {
      console.log(this.props)
        return (
            <div className="ingredient-tag-container">
              {this.props.searchItemsArr.map(item => 
             
             <p className="ingredienttag-ingredienttag">{item  }
             
             <span 
             
             className="ingredienttag-x" ><button value={item} onClick={removeIngredientTag}>X</button></span>
             </p>
              )}
              

            </div>
            
        )
    }
  
}

export default IngredientTag;