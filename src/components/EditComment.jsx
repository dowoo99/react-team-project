import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Buttons from "../ele/Button";
import Input from "../ele/Input";
import Text from "../ele/Text";
import { useDispatch } from "react-redux";

import {
  __getComment,
  __delteComment,
  __eiditComment,
} from "../redux/modules/commentSlice";

const EditComment = ({ comment }) => {
  const dispatch = useDispatch();
  const [eidt, Setedit] = useState(false);
  const [editComment, SeteditComment] = useState({
    id: "",
    name: "",
    comment: "",
    commentID: comment.id,
  });
  const onchangeButtomHandler = () => {
    Setedit(true);
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    SeteditComment({ ...editComment, [name]: value });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(__eiditComment(editComment));
    Setedit(false);
  };
  const ondeleteHandler = () => {
    dispatch(__delteComment(comment.id));
  };
  console.log(comment);

  return (
    <div>
      {eidt ? (
        <>
          <form
            style={{ width: "100%", display: "flex", alignItems: "center" }}
            onSubmit={onSubmitHandler}
          >
            <label style={{ margin: "10px" }}>유저</label>
            <div style={{ width: "200px" }}>
              <Input
                style={{ margin: "10px", width: "100%" }}
                onChange={onChangeHandler}
                type="text"
                name="name"
              ></Input>
            </div>
            <label style={{ margin: "25px" }}>댓글쓰기</label>
            <Input
              onChange={onChangeHandler}
              type="text"
              name="comment"
              style={{ width: "40%" }}
            ></Input>
            <Buttons style={{ margin: "10px" }}>수정완료!!</Buttons>
            <Buttons
              onClick={() => {
                Setedit(false);
              }}
            >
              취소
            </Buttons>
          </form>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #ddd",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <div>
            <Text size="10">{comment.name}</Text>
            <Text size="20">{comment.comment}</Text>
          </div>
          <div>
            <Buttons onClick={onchangeButtomHandler}>수정하기</Buttons>
            <Buttons style={{ margin: "10px" }} onClick={ondeleteHandler}>
              삭제하기
            </Buttons>
          </div>
        </div>
      )}
    </div>
  );
};
export default EditComment;
