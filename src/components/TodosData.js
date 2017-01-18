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

  // this.props.children({ ...this.state, addTodo: this.addTodo });
  render() {
    const { todos } = this.state;

    return (
      <div>
        <Match
          pattern="/"
          exactly
          render={
            () => this.props.children({ ...this.state, addTodo: this.addTodo })
          }
        />
        <Match
          pattern="/active"
          exactly
          render={
            () =>
              this.props.children({
                ...this.state,
                todos: todos.filter(todo => !todo.completed),
                addTodo: this.addTodo
              })
          }
        />
        <Match
          pattern="/completed"
          exactly
          render={
            () =>
              this.props.children({
                ...this.state,
                todos: todos.filter(todo => todo.completed),
                addTodo: this.addTodo
              })
          }
        />
      </div>
    );
  }
}

export default Todos;
