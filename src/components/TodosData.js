import React from "react";

class Todos extends React.Component {
  state = { todos: [ { id: 1, text: "Hello there", completed: false } ] };

  addTodo = newTodo => {
    const updatedTodos = [].concat(this.state.todos, [ newTodo ]);
    this.setState({ todos: updatedTodos });
  };

  render() {
    const { addTodo } = this;

    return this.props.children({ ...this.state, addTodo });
  }
}

export default Todos;
