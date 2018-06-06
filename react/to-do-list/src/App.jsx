import React , { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span><strong>{this.props.count}</strong> items left</span>
        <ul className="filters">
          <li><a href="">All</a></li>
          <li><a href="">Active</a></li>
          <li><a href="">Completed</a></li>
        </ul>
      </footer>
    );
  }
}

class TodoItem extends Component {
  render() {
    const todo = this.props.todo;

    return ( 
      <li className={todo.completed ? 'completed' : ''}>
        <div>
          <input 
            type="checkbox" 
            checked={todo.completed}
            onChange={this.props.handleChange}
          />
          <label htmlFor="">{todo.title}</label>
          <button>delete</button>
        </div>
      
      </li>
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
    const rows = [];
    const todos = this.props.todos;
    const initialValue = 0;
    const activeTodoCount = todos.reduce((accumulator, currentValue) => {
      // accumulator的初始值可以指定为initialValue, 如果没有指定，默认就是Array[0]
      if(currentValue.completed) {
        accumulator++;
      }

      return accumulator;
    }, initialValue);
    const completedCount = todos.length - activeTodoCount;

    // var activeTodoCount = todos.reduce(function (accum, todo) {
    //   return todo.completed ? accum : accum + 1;
    // }, 0);

    todos.forEach((todo) => {
      rows.push(
        <TodoItem key={todo.id} todo={todo}/>
      );

    });

    return (
      <div className="App">
        <Header style={{backGround:'#000'}}/>
        <ul>{rows}</ul>
        <Footer count={activeTodoCount}/>
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.object
};

Footer.propTypes = {
  count: PropTypes.number
};

TodoItem.propTypes = {
  todo: PropTypes.object
};

export default App;
