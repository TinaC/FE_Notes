import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

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

TodoList.propTypes = {
  todos: PropTypes.array,
  onToggleComplete: PropTypes.func,
  onDelete: PropTypes.func
};

export default TodoList;