import React, { useState } from "react";

export default function PostDetail({ post, onDelete, onBack }) {
  const [inputPassword, setInputPassword] = useState(""); // inputPassword 상태 변수 추가

  if (!post) return <div>게시글을 찾을 수 없습니다.</div>;

  const handleDelete = () => {
    if (inputPassword === post.password) {
      onDelete(post.id);
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <div className="post-info">
        <p className="price">{post.price}원</p>
        <p className="location">{post.location}</p>
        <p className="date">{post.createdAt}</p>
        <p className="nickname">작성자: {post.nickname}</p>
      </div>
      {post.image && (
        <div>
          <img
            src={post.image}
            alt="상품 이미지"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      )}

      <div className="content">{post.content}</div>

      <div className="button-group">
        <button onClick={onBack}>목록으로</button>
        <input
          type="password"
          placeholder="비밀번호 입력"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <button onClick={handleDelete}>삭제하기</button>
      </div>
    </div>
  );
}
