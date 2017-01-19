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
    this.setState({
      todos: this.state.todos.map(
        todo => todo.id === id ? { ...todo, ...update } : todo
      )
    });
  };

  updateAllTodos = update => {
    this.setState({
      todos: this.state.todos.map(todo => {
        return { ...todo, ...update };
      })
    });
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
      updateAllTodos: this.updateAllTodos,
      deleteTodo: this.deleteTodo,
      clearCompleted: this.clearCompleted
    };

    return (
      <div>
        <Match
          pattern="/"
          exactly
          render={() => this.props.children(renderProps)}
        />
        <Match
          pattern="/active"
          render={
            () =>
              this.props.children({
                ...renderProps,
                todos: todos.filter(todo => !todo.completed)
              })
          }
        />
        <Match
          pattern="/completed"
          render={
            () =>
              this.props.children({
                ...renderProps,
                todos: todos.filter(todo => todo.completed)
              })
          }
        />
      </div>
    );
  }
}

export default Todos;
