import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
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
      <StyledH1>{children}</StyledH1>
    </header>
  );
};

export default Header;
