import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      foods: ['spaghetti','cheese','meatballs','water','pizza'],
      input: ''
    }
  }
  handleInput(val){
    this.setState({input: val})
  }


  render() {
    var foodsToDisplay = this.state.foods.filter((e,i)=>{
      return e.includes( this.state.input );
    }).map((e,i) =>{
      return <h2 key={i}>{e}</h2>
    })
    return (
      <div className="App">
        <input onChange={(e) => this.handleInput(e.target.value)}/>
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;
