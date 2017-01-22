import React from "react";
import Link from "react-router/Link";
import styled from "styled-classnames";

const linkClass = styled`
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;

  &:hover { border-color: rgba(175, 47, 47, 0.1); }
`;

const activeClass = styled`
  border-color: rgba(175, 47, 47, 0.2);
`;

const FilterLink = props => {
  return (
    <Link {...props} className={linkClass()} activeClassName={activeClass()} />
  );
};

export default FilterLink;
