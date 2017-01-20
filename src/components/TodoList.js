import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const StyledSection = styled.section`
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;

  label[for='toggle-all'] { display: none; }

  .toggle-all {
    position: absolute;
    top: -55px;
    left: -12px;
    width: 60px;
    height: 34px;
    text-align: center;
    border: none; /* Mobile Safari */
  }

  .toggle-all:before {
    content: '❯';
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
  }

  .toggle-all:checked:before { color: #737373; }

  .todo-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  /*
  Hack to remove background from Mobile Safari.
  Can't use it globally since it destroys checkboxes in Firefox
  */
  @media screen and (-webkit-min-device-pixel-ratio:0) {
    .toggle-all {
      background: none;
      transform: rotate(90deg);
      appearance: none;
      -moz-appearance: checkbox; /* over-riding autoprefixer */
    }
  }
`;

const TodoList = ({ todos, onUpdateTodo, onDeleteTodo }) => (
  <StyledSection>
    {
      todos.length > 0
        ? <input
          className="toggle-all"
          id="toggle-all"
          type="checkbox"
          onChange={
            e =>
              todos.forEach(
                todo => onUpdateTodo(todo.id, { completed: e.target.checked })
              )
          }
          checked={todos.filter(todo => todo.completed).length === todos.length}
        />
        : null
    }
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul className="todo-list">
      {
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdateTodo={onUpdateTodo}
            onDeleteTodo={onDeleteTodo}
          />
        ))
      }
    </ul>
  </StyledSection>
);

export default TodoList;
