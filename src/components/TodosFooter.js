import React from "react";
import { Link } from "react-router";
import styled from "styled-components";

const StyledFooter = styled.footer`
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

  .filters li a {
  	color: inherit;
  	margin: 3px;
  	padding: 3px 7px;
  	text-decoration: none;
  	border: 1px solid transparent;
  	border-radius: 3px;
  }

  .filters li a.selected,
  .filters li a:hover {
  	border-color: rgba(175, 47, 47, 0.1);
  }

  .filters li a.selected {
  	border-color: rgba(175, 47, 47, 0.2);
  }

  .clear-completed,
  html .clear-completed:active {
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
  	.footer {
  		height: 50px;
  	}

  	.filters {
  		bottom: 10px;
  	}
  }
`;

const TodosFooter = ({ count }) => {
  return (
    <StyledFooter>
      <span className="todo-count">
        <strong>{count}</strong> item{count === 1 ? "" : "s"}left
      </span>
      <ul className="filters">
        <li>
          <Link activeOnlyWhenExact activeClassName="selected" to="/">All</Link>
        </li>
        <li>
          <Link activeOnlyWhenExact activeClassName="selected" to="/active">
            Active
          </Link>
        </li>
        <li>
          <Link activeOnlyWhenExact activeClassName="selected" to="/completed">
            Completed
          </Link>
        </li>
      </ul>
    </StyledFooter>
  );
};

export default TodosFooter;
