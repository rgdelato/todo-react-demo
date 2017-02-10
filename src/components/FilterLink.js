import React from "react";
import Route from "react-router-dom/Route";
import Link from "react-router-dom/Link";
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

const FilterLink = ({ exact, ...props }) => {
  return (
    <Route
      path={props.to}
      exact={exact}
      children={({ match }) => (
        <Link
          {...props}
          className={`${linkClass()} ${match ? activeClass() : ""}`}
        />
      )}
    />
  );
};

export default FilterLink;
