import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      filterStr: '',
      foods: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }
  foodFilter( filter ){
    this.setState({filterStr: filter})
  }

  render() {
    var foodsDisplayed = this.state.foods.filter( (e,i) => {
      return e.includes (this.state.filterStr);
    }).map((e, i) =>{
      return <h2 key={i}> {e} </h2>
    })

    return (
      <div className="App">
        <input type="text" onChange = {(e)=> this.foodFilter(e.target.value)}/>
        {foodsDisplayed}
      </div>
    );
  }
}

export default App;
