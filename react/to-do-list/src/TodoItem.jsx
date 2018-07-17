import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  toggleComplete = () => {
    console.log(this); // this is TodoItem
    this.props.onToggleComplete(this.props.todo);
  }

  delete = () => {
    this.props.onDelete(this.props.todo);
  }

  render() {
    const todo = this.props.todo;

    return (
      <li className={todo.completed ? 'completed' : ''}>
        <div>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={this.toggleComplete}/>
          <label htmlFor="">{todo.title}</label>
          <button onClick={this.delete}>Delete</button>
        </div>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  onToggleComplete: PropTypes.func,
  onDelete: PropTypes.func
};

export default TodoItem;
