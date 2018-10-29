

import React from 'react';

class RecipeDetails extends React.Component{
    renderlist(array) {
        return array.map(elem => <li key={elem}>{elem}</li>);
    }
    render(){
        return(
            <div>
                <h3>Ingredients</h3>
                <ul>
                    {this.renderlist(this.props.recipe.ingredients)}
                </ul>
                <h3>Procedure</h3>
                <ul>
                    {this.renderlist(this.props.recipe.procedure)}
                </ul>
            </div>
        );
    }
}
export default RecipeDetails;