import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  font-smoothing: antialiased;

  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
`;

class TodoInput extends React.Component {
  handleKeyDown = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const text = e.target.value.trim();

      if (text !== "") {
        this.props.addTodo(text);
        e.target.value = "";
      }
    }
  };

  render() {
    return (
      <StyledInput
        placeholder="What needs to be done?"
        autoFocus
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}

export default TodoInput;
