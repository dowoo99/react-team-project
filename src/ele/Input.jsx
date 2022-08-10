import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return <StInput {...props} required={true} minLength={3}></StInput>;
};

export default Input;

const StInput = styled.input`
  height: 40px;
  outline: none;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 10px;
  line-height: 50px;
`;
