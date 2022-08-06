import React, { useEffect } from "react";
import Comment from "../Comment";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { __getTodos } from "../redux/modules/todosSlice";
const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todos.todos);
  const navigation = useNavigate();

  return (
    <div>
      <nav className="nav">
        <h3>
          <button
            onClick={() => {
              navigation("/");
            }}
          >
            Home
          </button>
          Details
        </h3>
      </nav>
      <hr />
      <h4 className="prev_page">
        <button
          onClick={() => {
            navigation("/list");
          }}
        >
          이전으로
        </button>{" "}
      </h4>
      {todoList.map((todos) => {
        if (todos.id === id) {
          return (
            <div className="container">
              <section className="user_name">
                <h2>{todos.name}</h2>
                예시/ 김윤철
              </section>
              <section className="subject">
                <h2>{todos.title}</h2>
                예시/ 제목입니다
              </section>
              <section className="content">
                <h2>{todos.body}</h2>
                예시/ 내용입니다
              </section>
            </div>
          );
        }
      })}

      <div className="edit_button">
        <button
          style={{
            color: "tomato",
            width: "25%",
          }}
        >
          수정하기
        </button>
      </div>
      <hr style={{ marginTop: "5%" }} />
      <Comment></Comment>
    </div>
  );
};
export default Detail;
