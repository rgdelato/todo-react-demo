import React from "react";
import styled from "styled-classnames";

const inputClass = styled`
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
`;

const TodoTextInput = ({ className, innerRef, ...props }) => (
  <input {...props} ref={innerRef} className={`${inputClass} ${className}`} />
);

export default TodoTextInput;
