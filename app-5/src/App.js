import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image image="https://cdn.pixabay.com/photo/2013/07/13/10/06/violin-156558__340.png"/>
      </div>
    );
  }
}

export default App;
