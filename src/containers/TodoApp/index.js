import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';


import Input from '../../components/Input';
import Button from '../../components/Button';
import Form from '../../components/Form';
import TodoList from '../../components/TodoList/index.js';
import TodoListStorage from './TodoListStorage';
import { getInputValue } from './actions';

const propTypes = {
  value: PropTypes.string,
  filter: PropTypes.oneOf(['all', 'active', 'completed']),
};

const defaultProps = {
  value: '',
  filter: 'completed',
};

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.completeTodo =  this.completeTodo.bind(this);
    this.removeTodo =  this.removeTodo.bind(this);
  }

  todoListStorage = new TodoListStorage();

  componentDidMount() {

    let localStorageTodos;

    if (localStorageTodos) {
      if (this.props.completed === 'completed') {
        localStorageTodos = this.todoListStorage.getCompletedTodos();

        this.setState({
          todos: localStorageTodos,
        });
      } if (this.props.completed !== 'completed') {
        localStorageTodos = this.todoListStorage.getActiveTodos();

        this.setState({
          todos: localStorageTodos,
        });
      } else {
        let localStorageTodos = this.todoListStorage.getAllTodos();

        this.setState({
          todos: localStorageTodos,
        });
      }
    }
  }

  handleInputChange = (e) => {
    this.props.getInputValue(e.target.value)
  };

  handleSubmit(e) {
    e.preventDefault();

    if (!this.props.value.length) {
      return;
    }

    const newItem = {
      id: Date.now(),
      text: this.props.value,
      completed: false,
    };

    this.setState((prevState) => ({
      todos: [...prevState.todos, newItem],
    }));

    this.todoListStorage.saveTodo(newItem);

    this.props.getInputValue('')
  }


  completeTodo = (todoId) => {
    const newTodos = this.state.todos.slice();
    const index = newTodos.findIndex(todo => todo.id === todoId);

    newTodos[index].completed === false ?
      newTodos[index].completed = true :
      newTodos[index].completed = false;

    this.setState({
      todos: newTodos,
    });

    this.todoListStorage.completeTodo(index);

  };

  removeTodo = (todoId) => {
    const previosTodos = this.state.todos.slice();
    const newTodos = previosTodos.filter((newTodos) => newTodos.id !== todoId);

    this.setState({
      todos: newTodos,
    });

    this.todoListStorage.removeTodo(todoId);
  };

  render() {
    return (
      <div style={{'width': 300, 'margin': '0 auto'}}>
        <h3>My Todo</h3>
        <TodoList todos={this.state.todos} onCompleted={this.completeTodo} onRemove={this.removeTodo} />
        <Form handleSubmit={this.handleSubmit}>
          <Input
            onChange={this.handleInputChange}
            value={this.props.value}
          />
          <Button>
            Add
          </Button>
        </Form>
      </div>
    )
  }
}

TodoApp.propTypes = propTypes;
TodoApp.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    value: state.value,
  }
};

function mapDispatchToProps(dispatch) {
  return {
    getInputValue: (value) => dispatch(getInputValue(value)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
