import React, { useState } from "react";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
const Add = () => {
  const naviation = useNavigate();
  const [modal, Setmodal] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          naviation("/list");
        }}
      >
        ToDoList
      </button>
      <button
        onClick={() => {
          Setmodal(true);
        }}
      >
        +
      </button>
      <div>{modal === true ? <Modal Setmodal={Setmodal}></Modal> : null}</div>
    </div>
  );
};
export default Add;
