import React , { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 'b2d18a3b-0981-45c8-8083-f7aceed0c5e0', title: 'Sporting Goods', completed: true},
        {id: 'b2d18a3b-0981-45c8-8083-f7aceed0c5e1', title: ' Goods', completed: true},
        {id: 'b2d18a3b-0981-45c8-8083-f7aceed0c5e2', title: 'Sporg Goods', completed: false}
      ]
    };
  }

  onToggleComplete = (todo) => {
    const todos = this.state.todos;
    const newTodos = todos.map(item => {
      if(item === todo) {
        item.completed = !item.completed;
      }
      return item;
    });

    this.setState({
      todos:newTodos
    });
  }

  onDelete = (todo) => {
    const todos = this.state.todos;
    this.setState({
      todos: todos.filter(item => {
        return item !== todo;
      })
    });
  }

  onCreate = (title) => {
    const todos = this.state.todos;
    const todo = {id: uuidv4(), title: title, completed: false};

    // todos.unshift(todo): do not use this, Treat this.state as if it were immutable.
    this.setState({
      todos: [todo, ...todos]
    });
  }

  render() {
    // const rows = [];
    const todos = this.state.todos;
    const initialValue = 0;
    const activeTodoCount = todos.reduce((accumulator, currentValue) => {
      // accumulator的初始值可以指定为initialValue, 如果没有指定，默认就是Array[0]
      if(currentValue.completed) {
        accumulator++;
      }

      return accumulator;
    }, initialValue);

    return (
      <div className="App">
        <Header style={{backGround:'#000'}} onCreate={this.onCreate}/>
        <TodoList
          todos={todos}
          onToggleComplete={this.onToggleComplete}
          onDelete={this.onDelete}/>
        <Footer count={activeTodoCount}/>
      </div>
    );
  }
}

App.propTypes = {
  items: PropTypes.array,
  todos: PropTypes.array,
  onToggleComplete: PropTypes.func,
  onDelete: PropTypes.func
};

export default App;
