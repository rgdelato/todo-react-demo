import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const StyledSection = styled.section`
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;

  label[for='toggle-all'] {
    display: none;
  }

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

  .toggle-all:checked:before {
    color: #737373;
  }

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
    }

    .toggle-all {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
      -webkit-appearance: none;
      appearance: none;
    }
  }
`;

class TodoList extends React.Component {
  state = { editing: false };

  render() {
    const { todos } = this.props;
    return (
      <StyledSection>
        <input className="toggle-all" id="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
      </StyledSection>
    );
  }
}

export default TodoList;
