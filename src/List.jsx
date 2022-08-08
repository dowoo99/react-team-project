import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { __getTodos, __deleteTodos } from "./redux/modules/todosSlice";

const List = () => {
  const dispatch = useDispatch();
  const { todos, isLoding, eror } = useSelector((state) => state.todos);
  const navigation = useNavigate();
  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);
  const onClickDeleteHandler = (id) => {
    dispatch(__deleteTodos(id));
  };
  return (
    <Lists>
      <HeaderList>
        <div>ToDo List</div>
        <div
          onClick={() => {
            navigation("/");
          }}
        >
          이전으로
        </div>
      </HeaderList>
      <FlexBox>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {todos?.map((todo) => {
            return (
              <div key={todo.id}>
                <LowBox
                  onClick={() => {
                    navigation(`/detail/${todo.id}`);
                  }}
                >
                  <div>
                    <p>{todo.name}</p>
                    <p>{todo.title}</p>
                    <p>{todo.body}</p>
                  </div>
                </LowBox>
                <button
                  onClick={() => {
                    onClickDeleteHandler(todo.id);
                  }}
                >
                  삭제
                </button>
              </div>
            );
          })}
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
  flex-direction: column;
  flex-wrap: wrap;
  & > div {
    width: 350px;
    height: 400px;
    border: 1px solid black;
    margin: 50px 50px;
    background-color: aliceblue;
  }
`;
export default List;
