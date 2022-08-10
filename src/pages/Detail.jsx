import React, { useEffect, useState } from "react";
import Comment from "../components/Comment";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __getDetail, __editDetail } from "../redux/modules/todosSlice";
import Buttons from "../ele/Button";
import Text from "../ele/Text";
import Input from "../ele/Input";
import styled from "styled-components";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { todo, isLoading, error, todos } = useSelector((state) => state.todos);

  const [count, Setcount] = useState(true);
  const [write, Setwrite] = useState(false);
  const [edit, Setedit] = useState(false);
  const navigation = useNavigate();

  const [detailTodo, SetdetailTodo] = useState({
    id: "",
    name: "",
    title: "",
    body: "",
  });
  const detail = { id, detailTodo };
  // useEffect(() => {}, [edit]);
  useEffect(() => {
    dispatch(__getDetail(id));
  }, [id]);

  const oneditChangeHandler = () => {
    Setcount((prev) => !prev); //true->false
    Setwrite((prev) => !prev); //faluse->true
    Setedit((prev) => !prev);
    console.log(edit);
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    SetdetailTodo({ ...detailTodo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (count === false) {
      return;
    } else {
      dispatch(__editDetail(detail)); //수정하는부분
      // window.location.reload();
    }
  };

  return (
    <Details>
      <nav className="nav" style={{ display: "flex" }}>
        <Buttons
          onClick={() => {
            navigation("/");
          }}
        >
          Home
        </Buttons>
        <Text size={"30"}>Details</Text>
      </nav>
      <Buttons
        onClick={() => {
          navigation("/list");
        }}
      >
        이전으로
      </Buttons>

      <div
        style={{
          width: "100%",
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="container"
      >
        <form onSubmit={onSubmitHandler}>
          <section className="user_name">
            {write === false ? (
              <div>
                <div>id:{todo.id}</div>
                <h2 className="editWrite">작성자:{todo.name}</h2>
              </div>
            ) : (
              <div>
                <label>작성자</label>
                <Input
                  type="text"
                  onChange={onChangeHandler}
                  name="name"
                  style={{ marginBottom: "10px" }}
                ></Input>
              </div>
            )}
          </section>
          <section className="subject">
            {write === false ? (
              <h2 className="editWrite">제목:{todo.title}</h2>
            ) : (
              <div>
                <label>제목</label>
                <Input
                  type="text"
                  onChange={onChangeHandler}
                  name="title"
                  style={{ marginBottom: "10px" }}
                ></Input>
              </div>
            )}
          </section>
          <section className="content">
            {write === false ? (
              <h2 className="editWrite">내용:{todo.body}</h2>
            ) : (
              <div>
                <label>내용</label>
                <Input
                  type="text"
                  onChange={onChangeHandler}
                  name="body"
                  style={{ marginBottom: "5px" }}
                ></Input>
              </div>
            )}
          </section>
          <div className="edit_button">
            <Buttons onClick={oneditChangeHandler}>
              {write === false ? "수정하기" : "수정등록!!"}
            </Buttons>
          </div>
        </form>
      </div>

      <Comment todo={todo}></Comment>
    </Details>
  );
};
const Details = styled.div`
  width: "100%";
  background-color: rgb(24, 99, 173);
  height: 100vh;
`;
export default Detail;
