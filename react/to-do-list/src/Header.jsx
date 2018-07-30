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
    // this.myRef = React.createRef();

    this.handleKeyUp = this.keyUp.bind(this);
    this.handleKeyDown = this.keyUpHandler.bind(this);
  }

  keyUp(event) {
    var value = event.target.value;

    console.log("keyUp: " + value);
  }

  keyDown(event) {
    var value = event.target.value;

    console.log("keyUp: " + value);
  }

  keyUp = (event) => {
    var value = event.target.value;

    console.log("keyUp: " + value);
    console.log(this.myRef.current);

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
    // this.setState({input : event.target.value});
  }

  keyDown = (event) => {
    var value = event.target.value;

    console.log("keyDown: " + value);
  }

  render() {

    return (
      <header style={{color:'red'}}>
        <h1>My todos</h1>
        <input
          placeholder="What needs to be done"
          value={this.state.input}
          onChange={this.change}
          onKeyDown={this.keyDown}
          onKeyUp={this.keyUp}/>
      </header>
    );
  }
}

Header.propTypes = {
  onCreate: PropTypes.func
};

export default Header;