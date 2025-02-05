import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";

export default function ComunityWrite({ addPost, goBackComunity }) {
  const [title, setTitle] = useState(""); // 제목
  const [content, setContent] = useState(""); // 내용
  const [id, setId] = useState(Date.now());

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && content) {
      addPost(id, title, content);
      goBackComunity(); //  글 작성 후 커뮤니티 페이지로 이동
    }
  };

  return (
    <div className="community-write-container">
        <form className="community-write-form" onSubmit={handleSubmit}>
          
        <div className="form-header" style={{ display: "flex", alignItems: "center" }}>
        <IoArrowBack size="25" title="뒤로가기" onClick={goBackComunity}/>
        <h2 className="from-title">커뮤니티 글쓰기</h2>
        </div>

        <div>
          {/* <label>제목</label> */}
          <input
            className="input-filed-header"
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          {/* <label>내용</label> */}
          <textarea
            className="input-filed-content"
            placeholder="동네 이웃과 이야기를 나눠보세요.&#10;#맛집 #병원 #산책..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button className="submit-button" type="submit">저장</button>
      </form>
      {/* <button className="back-button" onClick={goBackComunity}>뒤로가기</button> */}
    </div>
  );
}
