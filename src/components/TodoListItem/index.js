/**
 * TodoListItem
 */

import PropTypes from "prop-types";
import React from 'react';
import cx from 'classnames';

import './styles.css';

const propTypes = {
  todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
  }),
  onCompleted: PropTypes.func,
  onRemove: PropTypes.func,
};

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.onRemove = this.onRemove.bind(this);
    this.onCompleted = this.onCompleted.bind(this);
  }

  onCompleted() {
    this.props.onCompleted(this.props.todo.id);
  }

  onRemove = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.props.onRemove(this.props.todo.id);
  };

  render() {
    const className = cx('todo', {
      'todo--completed': this.props.todo.completed,
    });

    return (
      <li className={className} onClick={this.onCompleted}>
        <span>{this.props.todo.text}</span>
        <span className="close" onClick={this.onRemove}> X </span>
      </li>
    );
  }
}

TodoListItem.propTypes = propTypes;

export default TodoListItem;