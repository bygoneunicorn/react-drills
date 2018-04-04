import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state ={
      foods: ['spaghatti','ice cream','cheeseballs','pretzels','bologna','pizza']
    }
  }

  render() {
    var foodList = this.state.foods.map((e,i) => {
      return(
        <h2 key={i}>{e}</h2>
      )
    })

    return (
      <div className="App">
        {foodList}
      </div>
    );
  }
}

export default App;
