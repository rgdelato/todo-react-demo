import React from "react";

class Todos extends React.Component {
  state = {
    todos: [
      { id: 1, title: "Hello there!", completed: true },
      { id: 2, title: "How are you?", completed: false },
      { id: 3, title: "...well.", completed: false }
    ]
  };

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
