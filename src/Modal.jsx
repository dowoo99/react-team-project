import React from "react";
const Modal = ({ Setmodal }) => {
  return (
    <div>
      <from>
        <div
          onClick={() => {
            Setmodal(false);
          }}
        >
          x
        </div>
        <label>작성자</label>
        <input type="text"></input>
        <label>제목</label>
        <input type="text"></input>
        <label>내용</label>
        <input type="text"></input>
        <button>추가하기</button>
      </from>
    </div>
  );
};

export default Modal;
