import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import router from './router'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/details">Details</Link>
            <Link to="/signup">Signup</Link>
          </ul>
        </nav>
      <br/>
      {router}
      </div>
    );
  }
}

export default App;
