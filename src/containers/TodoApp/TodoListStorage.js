class TodoListStorage {
  constructor() {
    this.key = 'todos';
  }

  saveTodo(todo) {
    const previosTodos = this.getAllTodos();

    if (previosTodos) {
      const newTodos = [...previosTodos, todo];
      localStorage.setItem(this.key, JSON.stringify(newTodos));
    } else {
      localStorage.setItem(this.key, JSON.stringify([todo]));
    }
  }

  completeTodo(index) {
    const todos = this.getAllTodos();

    todos[index].completed === false ?
      todos[index].completed = true :
      todos[index].completed = false;

    localStorage.setItem(this.key, JSON.stringify(todos));
  }

  removeTodo(todoId) {
    const previosTodos = this.getAllTodos();
    const newTodos = previosTodos.filter((newTodos) => newTodos.id !== todoId);
    localStorage.setItem(this.key, JSON.stringify(newTodos));
  }

  getAllTodos() {
    console.log('getAllTodos', JSON.parse(localStorage.getItem(this.key)));
    return JSON.parse(localStorage.getItem(this.key));
  }
}

export default TodoListStorage;
