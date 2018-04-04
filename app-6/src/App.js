import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends Component {
  constructor(){
    super()

    this.state = {
      input: '',
      list: []
    }
    this.handleInput = this.handleInput.bind( this )
    this.handleAddItem = this.handleAddItem.bind( this )
  }
  handleInput(val){
    this.setState({input: val})
  }
  handleAddItem(item){
    var list = []
    list.push(item)
    this.setState({list: list})
  }
 
  render() {
    let displayList = this.state.list.map((e, i) => {
      return(
        <Todo key={i} tasksArray={e} />
      )
    })

    return (
      <div className="App">
        <h1>To Do List</h1>
        <input placeholder="Add an Item" onChange = {(e) => this.handleInput(e.target.value)}/>
        <button onClick={this.handleAddItem(this.state.input)}>Add</button>
        {displayList}

      </div>
    );
  }
}

export default App;