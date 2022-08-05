import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const List = () => {
  const navigation = useNavigate();
  return (
    <Lists>
      <HeaderList>
        <div>ToDO List</div>
        <div
          onClick={() => {
            navigation("/");
          }}
        >
          이전으로
        </div>
      </HeaderList>
      <FlexBox>
        <div>
          <LowBox>
            <div
              onClick={() => {
                navigation("/detail");
              }}
            >
              1 <button>삭제</button>
            </div>
            <div>
              2 <button>삭제</button>
            </div>
            <div>
              3 <button>삭제</button>
            </div>
          </LowBox>
          <LowBox>
            <div>
              4 <button>삭제</button>
            </div>
            <div>
              5 <button>삭제</button>
            </div>
            <div>
              6 <button>삭제</button>
            </div>
          </LowBox>
        </div>
      </FlexBox>
    </Lists>
  );
};
const Lists = styled.div`
  width: 100%;
`;
const HeaderList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;
const FlexBox = styled.div`
  display: flex;
  padding: 40px;
  justify-content: center;
  align-items: center;
`;
const LowBox = styled.div`
  display: flex;
  flex-direction: row;
  & > div {
    width: 350px;
    height: 400px;
    border: 1px solid black;
    margin: 50px 50px;
    & > button {
      float: right;
      margin: 20px;
    }
  }
`;
export default List;
