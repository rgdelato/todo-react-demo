import React from "react";
import styled from "styled-components";
import TodoTextInput from "./TodoTextInput";

const StyledInput = styled(TodoTextInput)`
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
`;

class AddTodoForm extends React.Component {
  handleKeyDown = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const text = e.target.value.trim();

      if (text !== "") {
        this.props.onAddTodo(text);
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

export default AddTodoForm;
