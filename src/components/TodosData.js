import React, { PropTypes } from "react";
import Match from "react-router/Match";

class TodosData extends React.Component {
  state = {
    todos: [
      { id: 0, text: "Hello there!", completed: true },
      { id: 1, text: "How are you?", completed: false },
      { id: 2, text: "...well.", completed: false }
    ]
  };

  nextTodoId = this.state.todos.reduce(
    (acc, todo) => Math.max(acc, todo.id),
    0
  ) +
    1;

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

  render() {
    const { todos } = this.state;

    return (
      <Match
        pattern="/:filter?"
        render={({ params: { filter } }) =>
          this.props.children({
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
