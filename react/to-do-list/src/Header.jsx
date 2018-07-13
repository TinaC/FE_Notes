import React, { Component } from 'react';

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

export default Header;