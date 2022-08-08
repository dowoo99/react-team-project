import React from "react";

const Comment = () => {
  return (
    <div>
      <h3>
        <button>댓글 숨기기 / 보이기</button>
      </h3>

      <div>
        <input type="text" placeholder="작성자(5자이내)" />
        <input type="text" placeholder="내용(100자이내)" />
        <button>추가하기</button>
      </div>

      <div className="comment_container">
        <h4 className="comment_name">김윤철</h4>
        <h4 className="comment_content">예시/내용입니다</h4>

        <div className="edit_buttons">
          <button>수정ss</button>
          <button>삭제ss</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
