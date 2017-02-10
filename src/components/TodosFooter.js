import React from "react";
import styled from "styled-classnames";
import FilterLink from "././FilterLink";

const footerClass = styled`
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;

  &:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
                0 8px 0 -3px #f6f6f6,
                0 9px 1px -3px rgba(0, 0, 0, 0.2),
                0 16px 0 -6px #f6f6f6,
                0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }

  .todo-count {
    float: left;
    text-align: left;
  }

  .todo-count strong {
    font-weight: 300;
  }

  .filters {
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    right: 0;
    left: 0;
  }

  .filters li {
    display: inline;
  }

  .clear-completed,
  .clear-completed:active {
    float: right;
    position: relative;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
    position: relative;
  }

  .clear-completed:hover {
    text-decoration: underline;
  }

  @media (max-width: 430px) {
    height: 50px;

    .filters {
      bottom: 10px;
    }
  }
`;

const TodosFooter = ({ todos, onClearCompleted }) => {
  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <footer className={footerClass}>
      <span className="todo-count">
        <strong>{activeCount}</strong> item{activeCount !== 1 ? "s" : ""} left
      </span>
      <ul className="filters">
        <li>
          <FilterLink exact to="/">All</FilterLink>
        </li>
        <li>
          <FilterLink to="/active">
            Active
          </FilterLink>
        </li>
        <li>
          <FilterLink to="/completed">
            Completed
          </FilterLink>
        </li>
      </ul>
      {completedCount > 0
        ? <button className="clear-completed" onClick={onClearCompleted}>
            Clear completed
          </button>
        : null}
    </footer>
  );
};

export default TodosFooter;
