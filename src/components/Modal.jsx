import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __postTodos } from "../redux/modules/todosSlice";
const Modal = ({ Setmodal }) => {
  const dispatch = useDispatch();
  const [todos, setTodos] = useState({
    id: "",
    name: "",
    title: "",
    body: "",
  });
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodos({ ...todos, [name]: value });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (
      todos.name.trim() === "" ||
      todos.title.trim() === "" ||
      todos.body.trim() === ""
    ) {
      return alert("모든 항목을 입력해주세요.");
    }
    dispatch(__postTodos({ ...todos }));
    setTodos({
      name: "",
      title: "",
      body: "",
      id: "",
    });
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div
        onClick={() => {
          Setmodal(false);
        }}
      >
        x
      </div>
      <label>작성자</label>
      <input
        onChange={onChangeHandler}
        name="name"
        type="text"
        value={todos.name}
      ></input>
      <label>제목</label>
      <input
        onChange={onChangeHandler}
        name="title"
        type="text"
        value={todos.title}
      ></input>
      <label>내용</label>
      <input
        onChange={onChangeHandler}
        name="body"
        type="text"
        value={todos.body}
      ></input>
      <button>추가하기</button>
    </form>
  );
};

export default Modal;
