import React, { useState } from "react";

export default function ComunityWrite({ addPost, goBack }) {
  const [title, setTitle] = useState(""); // 제목
  const [content, setContent] = useState(""); // 내용

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (title && content) {
      addPost(title, content);
      goBack(); //  글 작성 후 커뮤니티 페이지로 이동
    }
  };

  return (
    <div>
      <h1>커뮤니티 글쓰기</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목</label>
          <input
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>내용</label>
          <textarea
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">저장</button>
      </form>
      <button onClick={goBack}>뒤로가기</button>
    </div>
  );
}
