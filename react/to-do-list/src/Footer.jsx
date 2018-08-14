import React, { Component } from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';



class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span><strong>{this.props.count}</strong> items left</span>
        <ul className="filters">
          <li><NavLink to="/" activeClassName="selected">All</NavLink></li>
          <li><NavLink to="/active" activeClassName="selected">Active</NavLink></li>
          <li><NavLink to="/completed" activeClassName="selected">Completed</NavLink></li>
          <li><NavLink to="" activeClassName="test">Clear complete</NavLink></li>
        </ul>
      </footer>

    // <div>
    //   <Route exact path="/"/>
    //   <Route path="/active"/>
    // </div>
    );
  }
}

// <li><a href="#/" onChange={this.props.onSelectAll}>All</a></li>
// <li><a href="#/active">Active</a></li>
// <li><a href="#/completed">Completed</a></li>
// <li><a href="">Clear complete</a></li>

Footer.propTypes = {
  count: PropTypes.number
};

export default Footer;