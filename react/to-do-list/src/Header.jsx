import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    // value={this.state.value
    // this.state = {value: ''};
  }

  create = (event) => {
    this.props.onCreate(event.target.value);
  }

  render() {
    return (
      <header style={{color:'red'}}>
        <h1>My todos</h1>
        <input placeholder="What needs to be done" onKeyPress={this.create}/>
      </header>
    );
  }
}

Header.propTypes = {
  onCreate: PropTypes.func
};

export default Header;