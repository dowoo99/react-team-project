import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Headers>
      <Home>
        <Homeitem>home</Homeitem>
        <Title>list Page</Title>
      </Home>
    </Headers>
  );
};
const Headers = styled.div`
  width: 100%;
  height: 200px;
`;
const Home = styled.div`
  display: flex;
  align-items: center;
`;
const Homeitem = styled.div`
  padding: 30px;
`;
const Title = styled.div`
  font-size: 40px;
  padding: 30px;
`;
export default Header;
