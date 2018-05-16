import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <span><strong></strong> items left</span>
        <ul class="filters">
          <li><a href="">All</a></li>
          <li><a href="">Active</a></li>
          <li><a href="">Completed</a></li>
        </ul>
      </footer>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header style={{color:'red'}}>
        <h1>My todos</h1>
        <input placeholder="What needs to be done"/>
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header style={{backGround:'#000'}}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
