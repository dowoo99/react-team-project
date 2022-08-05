import React from "react";
import Comment from "../Comment";
import { useNavigate } from "react-router-dom";
const Detail = () => {
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
      <div className="container">
        <section className="user_name">
          <h2>작성자</h2>
          예시/ 김윤철
        </section>
        <section className="subject">
          <h2>제목</h2>
          예시/ 제목입니다
        </section>
      </div>
      <section className="content">
        <h2>내용</h2>
        예시/ 내용입니다
      </section>
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
