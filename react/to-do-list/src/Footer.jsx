import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span><strong>{this.props.count}</strong> items left</span>
        <ul className="filters">
          <li><a href="" onChange={this.props.onSelectAll}>All</a></li>
          <li><a href="">Active</a></li>
          <li><a href="">Completed</a></li>
        </ul>
      </footer>
    );
  }
}

Footer.propTypes = {
  count: PropTypes.number
};

export default Footer;