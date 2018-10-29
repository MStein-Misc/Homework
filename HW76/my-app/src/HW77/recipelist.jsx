

import React from 'react';
import RecipeDetails from './recipedetails.jsx';
import './recipelist.css';

class RecipeList extends React.Component {
    constructor(props) {
        super(props);
        this.getDetails = this.getDetails.bind(this);
        this.state = {
            details: undefined
        }
    }
    getDetails(recipe) {
        if (this.state.open !== recipe)
            return;
        return (
            <RecipeDetails recipe={this.props.recipeList[recipe]} />
        );
    }
    recipes() {
        var list = [];
        for (const recipe in this.props.recipeList) {
            if (this.props.recipeList.hasOwnProperty(recipe)) {
                list.push(<li className="recipe" key={recipe} onClick={e => this.setState({ open: recipe })} >
                    <h1>{recipe}</h1>
                    {this.getDetails(recipe)}
                </li>);
            }
        }
        return list;
    }
    render() {
        return (
            <div>
                <ul>
                    {this.recipes()}
                </ul>
            </div>
        );
    }
}
export default RecipeList;