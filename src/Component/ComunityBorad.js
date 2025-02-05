import React from "react";

export default function ComunityBorad({ post , goBackComunity  }) {
  return (
    <div>
      id: {post.id}
      <h1>제목:{post.title}</h1>
      내용: {post.content}
      <button onClick={goBackComunity}>뒤로가기</button>
    </div>
  );
}
