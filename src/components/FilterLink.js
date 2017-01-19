import React from "react";
import { Link } from "react-router";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;

  &:hover { border-color: rgba(175, 47, 47, 0.1); }
  &.active { border-color: rgba(175, 47, 47, 0.2); }
`;

const FilterLink = ({ activeClassName, ...props }) => {
  return (
    <StyledLink {...props} activeClassName={`active ${activeClassName}`} />
  );
};

export default FilterLink;