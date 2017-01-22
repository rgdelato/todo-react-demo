import React from "react";
import styled from "styled-classnames";

const h1Class = styled`
  position: absolute;
  top: -155px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  text-rendering: optimizeLegibility;
`;

const Header = ({ children }) => {
  return (
    <header>
      <h1 className={h1Class}>{children}</h1>
    </header>
  );
};

export default Header;
