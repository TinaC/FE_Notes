import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleClick = () => {
    console.log(this);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default App;
