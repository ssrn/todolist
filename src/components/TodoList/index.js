/**
 * TodoList
 */
import PropTypes from 'prop-types';
import React from 'react';

import TodoListItem from '../TodoListItem/index';

const propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ),
  onCompleted: PropTypes.func,
  onRemove: PropTypes.func,
};

function TodoList({ todos, onCompleted, onRemove }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onCompleted={onCompleted} onRemove={onRemove} />
      ))}
    </ul>
  );
}

TodoList.propTypes = propTypes;

export default TodoList;