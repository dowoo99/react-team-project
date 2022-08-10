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
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: black;
  background: white;
`;
export default Buttons;
