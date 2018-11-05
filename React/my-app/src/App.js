import React, { Component } from 'react';
import './App.css';
// import Clock from './clock';
// import Student from './student';
import recipes from './HW77/recipes.json';
import RecipeList from './HW77/recipelist.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Clock /> */}
        {/* <Student name="Donald" address="1600 Pennsylvania Ave." /> */}
        {/* <Student name="Vladimir" address="ul. Vosdovizhenka d. 1" /> */}
        <RecipeList recipeList={recipes} />
      </div>
    );
  }
}
export default App;
