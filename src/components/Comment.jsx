import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __postComment, __getComment } from "../redux/modules/commentSlice";
import Buttons from "../ele/Button";
import EditComment from "./EditComment";
import { useParams } from "react-router-dom";

const Comment = ({ todo }) => {
  const { id } = useParams();
  const { isGlobalEditmode, tocomments } = useSelector(
    (state) => state.comment
  );

  const dispatch = useDispatch();
  const [edit, Setedit] = useState(false);
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
    <div>
      <h3>
        <button>댓글 숨기기 / 보이기</button>
      </h3>

      <form onSubmit={onSubmitHandeler}>
        <input
          onChange={onChangeHanderler}
          name="name"
          type="text"
          placeholder="작성자(5자이내)"
        />
        <input
          onChange={onChangeHanderler}
          name="comment"
          type="text"
          placeholder="내용(100자이내)"
        />
        <button>추가하기</button>
      </form>

      <div className="comment_container">
        <div>
          {tocomments?.map((comment) => (
            <EditComment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comment;
