import React from "react";
import styled from "styled-components";
const Buttons = (props) => {
  return (
    <StyledButton {...props} disabled={props.disabled}>
      {props.children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  text-align: center;

  border-radius: 8px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid lightgray;
  color: black;
  background-color: #fff;
  border: 1px solid #eee;
  cursor: pointer;
`;
export default Buttons;
