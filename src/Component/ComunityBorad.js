import React from "react";

export default function ComunityBorad({ post, goBackComunity, onDelete }) {
  const handleDelete = () => {
    onDelete(post.id);
  };

  return (
    <div>
      id: {post.id}
      <h1>제목:{post.title}</h1>
      내용: {post.content}
      <button onClick={goBackComunity}>뒤로가기</button>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
}
