import React, { Component } from 'react';
import './App.css';
import Clock from './clock';
import Student from './student';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <Student name="Donald" address="1600 Pennsylvania Ave." />
        <Student name="Vladimir" address="ul. Vosdovizhenka d. 1" />
      </div>
    );
  }
}
export default App;
