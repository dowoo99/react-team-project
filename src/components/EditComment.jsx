import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Buttons from "../ele/Button";
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

  return (
    <div>
      {eidt ? (
        <>
          <form onSubmit={onSubmitHandler}>
            <label>유저</label>
            <input onChange={onChangeHandler} type="text" name="name"></input>
            <label>댓글쓰기</label>
            <input
              onChange={onChangeHandler}
              type="text"
              name="comment"
            ></input>
            <button>수정완료!!</button>
          </form>
        </>
      ) : (
        <div style={{ display: "flex" }}>
          <div>{comment.name}</div>
          <div>{comment.comment}</div>
          <button onClick={onchangeButtomHandler}>수정하기</button>
          <button onClick={ondeleteHandler}>삭제하기</button>
        </div>
      )}
    </div>
  );
};
export default EditComment;
