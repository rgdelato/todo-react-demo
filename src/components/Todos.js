import React from "react";
import styled from "styled-components";
import TodosData from "./TodosData";
import TodoList from "./TodoList";
import TodosFooter from "./TodosFooter";

const StyledSection = styled.section`

	input::-webkit-input-placeholder {
		font-style: italic;
		font-weight: 300;
		color: #e6e6e6;
	}

	 input::-moz-placeholder {
		font-style: italic;
		font-weight: 300;
		color: #e6e6e6;
	}

	 input::input-placeholder {
		font-style: italic;
		font-weight: 300;
		color: #e6e6e6;
	}

	.new-todo,
	.edit {
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
	}

	.new-todo {
		padding: 16px 16px 16px 60px;
		border: none;
		background: rgba(0, 0, 0, 0.003);
		box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
	}
`;

const Todos = () => {
  return (
    <TodosData>
      {({ todos }) => (
          <StyledSection>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
            />
            <TodoList todos={todos} />
            <TodosFooter
              todos={todos}
              onClearCompleted={() => {
                }}
            />
          </StyledSection>
        )}
    </TodosData>
  );
};

export default Todos;
