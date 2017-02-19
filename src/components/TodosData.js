import React, { PropTypes } from "react";
import Route from "react-router-dom/Route";
import localforage from "localforage";

const LOCALFORAGE_KEY = "todos";

class TodosData extends React.Component {
  constructor(props) {
    super(props);

    this.state = { todos: null };
    this.nextTodoId = null;

    localforage.getItem(LOCALFORAGE_KEY).then(todos => {
      this.setState({ todos });
      this.nextTodoId = 1 +
        todos.reduce((acc, todo) => Math.max(acc, todo.id), 0);
    });
  }

  addTodo = text => {
    this.setState(state => ({
      todos: [...state.todos, { id: this.nextTodoId++, text, completed: false }]
    }));
  };

  updateTodo = (id, update) => {
    this.setState(state => ({
      todos: state.todos.map(
        todo => todo.id === id ? { ...todo, ...update } : todo
      )
    }));
  };

  deleteTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  };

  clearCompleted = () => {
    this.setState(state => ({
      todos: state.todos.filter(todo => !todo.completed)
    }));
  };

  componentDidUpdate() {
    localforage.setItem(LOCALFORAGE_KEY, this.state.todos);
  }

  render() {
    const { todos } = this.state;

    if (!todos) {
      return null;
    }

    return (
      <Route
        path="/:filter?"
        render={({ match: { params: { filter } } }) => this.props.children({
          todos: todos.filter(
            filter === "active"
              ? todo => !todo.completed
              : filter === "completed" ? todo => todo.completed : todo => todo
          ),
          addTodo: this.addTodo,
          updateTodo: this.updateTodo,
          deleteTodo: this.deleteTodo,
          clearCompleted: this.clearCompleted
        })}
      />
    );
  }

  static propTypes = { children: PropTypes.func.isRequired };
}

export default TodosData;
