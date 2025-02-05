import React from "react";

export default function detail({ goBack, post }) {
  return (
    <div>
      <h1>디테일</h1>
      {post.name}
      {post.description}
      <button onClick={goBack}> 취소 </button>
    </div>
  );
}
