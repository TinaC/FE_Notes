import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span><strong>{this.props.count}</strong> items left</span>
        <ul className="filters">
          <li><a href="#/" onChange={this.props.onSelectAll}>All</a></li>
          <li><a href="#/active">Active</a></li>
          <li><a href="#/completed">Completed</a></li>
          <li><a href="">Clear complete</a></li>
        </ul>
      </footer>
    );
  }
}

Footer.propTypes = {
  count: PropTypes.number
};

export default Footer;