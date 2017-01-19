import React from "react";
import { Match } from "react-router";

class Todos extends React.Component {
  state = {
    todos: [
      { id: 0, title: "Hello there!", completed: true },
      { id: 1, title: "How are you?", completed: false },
      { id: 2, title: "...well.", completed: false }
    ]
  };

  addTodo = title => {
    const newTodo = { id: this.state.todos.length, title, completed: false };
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
