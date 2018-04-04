import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      input: ''
    }
    this.handleInput = this.handleInput.bind( this )
  }
  handleInput(val){
    this.setState({input: val})
  }

  render() {
    return (
      <div className ='App'>
        <input onChange = {(e) => this.handleInput(e.target.value)}/>
        <br />
        <h2>{this.state.input}</h2>
      </div>
    );
  }
}

export default App;
