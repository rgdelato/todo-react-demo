import React from "react";
import styled from "styled-classnames";

const footerClass = styled`
  margin: 65px auto 0;
  color: #bfbfbf;
  font-size: 10px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  text-align: center;

  p {
    line-height: 1;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 400;

    &:hover { text-decoration: underline; }
  }
`;

const Footer = () => {
  return (
    <footer className={footerClass}>
      <p>Double-click to edit a todo</p>
      <p>Written by Ryan De La Torre</p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  );
};

export default Footer;
