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
    this.setState(state => ({ todos: [ ...state.todos, newTodo ] }));
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
        render={
          ({ params: { filter } }) =>
            this.props.children({
              todos: todos.filter(
                filter === "active"
                  ? todo => !todo.completed
                  : filter === "completed"
                    ? todo => todo.completed
                    : todo => todo
              ),
              addTodo: this.addTodo,
              updateTodo: this.updateTodo,
              deleteTodo: this.deleteTodo,
              clearCompleted: this.clearCompleted
            })
        }
      />
    );
  }
}

export default Todos;
