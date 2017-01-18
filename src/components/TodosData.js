import React from "react";

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

  render() {
    return this.props.children({ ...this.state, addTodo: this.addTodo });
  }
}

export default Todos;
