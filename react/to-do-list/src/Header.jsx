import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
  }

  create = (event) => {
    var value = event.target.value;

    console.log(value);

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

  render() {
    return (
      <header style={{color:'red'}}>
        <h1>My todos</h1>
        <input
          placeholder="What needs to be done"
          value={this.state.input}
          onChange={this.change}
          onKeyUp={this.create}/>
      </header>
    );
  }
}

Header.propTypes = {
  onCreate: PropTypes.func
};

export default Header;