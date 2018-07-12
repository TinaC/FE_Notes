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

class TodoList extends Component {
  render() {
    const todos = this.props.todos;

    return (
      <ul>
        {todos.map(item =>
          <TodoItem
            key={item.id}
            todo={item}
            onToggleComplete={this.props.onToggleComplete}
            onDelete={this.props.onDelete}
          />
        )}
      </ul>
    );
  }
}

class TodoItem extends Component {
  toggleComplete = () => {
    console.log(this); // this is TodoItem
    this.props.onToggleComplete(this.props.todo);
  }

  delete = () => {
    this.props.onDelete(this.props.todo);
  }

  constructor(props) {
    super(props);
  }

  render() {
    const todo = this.props.todo;

    return (
      <li className={todo.completed ? 'completed' : ''}>
        <div>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={this.toggleComplete}
          />
          <label htmlFor="">{todo.title}</label>
          <button onClick={this.delete}>Delete</button>
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
        <Header style={{backGround:'#000'}}/>
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

Footer.propTypes = {
  count: PropTypes.number
};

TodoList.propTypes = {
  todos: PropTypes.array,
  onToggleComplete: PropTypes.func,
  onDelete: PropTypes.func
};

TodoItem.propTypes = {
  todo: PropTypes.object,
  onToggleComplete: PropTypes.func,
  onDelete: PropTypes.func
};

export default App;
