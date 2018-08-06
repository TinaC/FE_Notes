import React, { Component } from 'react';
import PropTypes from 'prop-types';

// function FanceButton(props) {
//   return (
//     <button className="FancyButton">
//       {props.children}
//     </button>
//   )
// }

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
  }

  keyUp = (event) => {
    var value = event.target.value;

    console.log("keyUp: " + value);

    if(event.key !== 'Enter'){
      return;
    }

    if(value) {
      this.props.onCreate(event.target.value);
      this.setState({input : ''});
    }

  }

  change = (event) => {
    var value = event.target.value;

    console.log("change: " + value);
    // set input value, do not use input default behavior, using one-way binding for convenient state control
    this.setState({input : event.target.value});
  }

  render() {

    return (
      <header style={{color:'red'}}>
        <h1>My todos</h1>
        <input
          placeholder="What needs to be done"
          onKeyUp={this.keyUp}
          onChange={this.change}/>
      </header>
    );
  }
}

Header.propTypes = {
  onCreate: PropTypes.func
};

export default Header;