import React from "react";
import { Match } from "react-router";

class Todos extends React.Component {
  state = {
    todos: [
      { id: 0, text: "Hello there!", completed: true },
      { id: 1, text: "How are you?", completed: false },
      { id: 2, text: "...well.", completed: false }
    ]
  };

  nextTodoId = this.state.todos.length;

  addTodo = text => {
    const newTodo = { id: this.nextTodoId++, text, completed: false };
    this.setState({ todos: [ ...this.state.todos, newTodo ] });
  };

  updateTodo = (id, update) => {
    // using the function form of "setState" to prevent "toggle all" from getting stale state
    this.setState(state => ({
      todos: state.todos.map(
        todo => todo.id === id ? { ...todo, ...update } : todo
      )
    }));
  };

  deleteTodo = id => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  };

  clearCompleted = () => {
    this.setState({ todos: this.state.todos.filter(todo => !todo.completed) });
  };

  render() {
    const { todos } = this.state;
    const renderProps = {
      ...this.state,
      addTodo: this.addTodo,
      updateTodo: this.updateTodo,
      deleteTodo: this.deleteTodo,
      clearCompleted: this.clearCompleted
    };

    return (
      <Match
        pattern="/:filter?"
        render={
          ({ params: { filter } }) =>
            filter === "active"
              ? this.props.children({
                ...renderProps,
                todos: todos.filter(todo => !todo.completed)
              })
              : filter === "completed"
                ? this.props.children({
                  ...renderProps,
                  todos: todos.filter(todo => todo.completed)
                })
                : this.props.children(renderProps)
        }
      />
    );
  }
}

export default Todos;
