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

  addTodo = text => {
    const newTodo = { id: this.state.todos.length, text, completed: false };
    this.setState({ todos: [ ...this.state.todos, newTodo ] });
  };

  updateTodo = () => {
  };

  render() {
    const { todos } = this.state;
    const renderProps = {
      ...this.state,
      addTodo: this.addTodo,
      updateTodo: this.updateTodo
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
          exactly
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
          exactly
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
