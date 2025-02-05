import React from "react";

export default function ComunityBorad({ post }) {
  return (
    <div>
      id: {post.id}
      <h1>제목:{post.title}</h1>
      내용: {post.content}
    </div>
  );
}
