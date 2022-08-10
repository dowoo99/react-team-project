import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __postComment, __getComment } from "../redux/modules/commentSlice";
import Buttons from "../ele/Button";
import Input from "../ele/Input";
import Text from "../ele/Text";
import EditComment from "./EditComment";
import { useParams } from "react-router-dom";

const Comment = ({ todo }) => {
  const { id } = useParams();
  const { isGlobalEditmode, tocomments } = useSelector(
    (state) => state.comment
  );

  const dispatch = useDispatch();
  const [toggle, Settoggle] = useState(false);
  useEffect(() => {
    dispatch(__getComment(id));
  }, []);
  const [comment, Setcomment] = useState({
    id: "",
    name: "",
    comment: "",
  });

  const onChangeHanderler = (event) => {
    const { name, value } = event.target;
    Setcomment({
      ...comment,
      [name]: value,
      todoID: todo.id,
      newID: todo.nextid,
    });
    console.log(comment);
  };
  const onSubmitHandeler = (event) => {
    event.preventDefault();
    dispatch(__postComment(comment));
  };

  return (
    <StContainer toggle={toggle}>
      <div>
        <StToggleContainer>
          <Text
            size="20"
            onClick={() => {
              Settoggle((pre) => !pre);
            }}
          >
            {toggle ? "눌러서 댓글내리기" : "눌러서 댓글보기"}
          </Text>
        </StToggleContainer>
        <div style={{ padding: "20px" }}>
          <Stdiv>
            <Forms
              onSubmit={onSubmitHandeler}
              style={{ display: "flex", width: "100%", gap: "12px" }}
            >
              <StNameInput>
                <Input
                  onChange={onChangeHanderler}
                  name="name"
                  type="text"
                  maxLength={5}
                  placeholder="작성자(5자이내)"
                  style={{ width: "100%" }}
                />
              </StNameInput>
              <Input
                onChange={onChangeHanderler}
                name="comment"
                type="text"
                maxLength={100}
                placeholder="내용(100자이내)"
                style={{ width: "100%" }}
              />
              <Buttons>추가하기</Buttons>
            </Forms>
          </Stdiv>

          <StCommentList>
            <div>
              {tocomments?.map((comment) => (
                <EditComment key={comment.id} comment={comment} />
              ))}
            </div>
          </StCommentList>
        </div>
      </div>
    </StContainer>
  );
};
export default Comment;
const StContainer = styled.div`
  width: 100%;
  height: 400px;
  height: ${({ toggle }) => (toggle ? "400px" : "50px")};
  transition: height 400ms ease-in-out;
  background-color: #ffff;
  position: absolute;
  bottom: 0px;
  left: 0px;
  & > div {
  }
`;
const Stdiv = styled.div`
  margin-top: 20px;
  display: flex;
`;
const Forms = styled.form`
  justify-content: center;
  align-items: center;
`;
const StNameInput = styled.div`
  width: 200px;
`;

const StToggleContainer = styled.div`
  padding: 0 12px;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dfc043;
  height: 50px;
`;
const StCommentList = styled.div`
  height: 350px;
  padding: 10px 20px;
`;
