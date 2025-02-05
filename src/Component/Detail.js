import React from "react";

export default function detail({ goBack, post }) {
  return (
    <div>
      <h1>디테일</h1>
      <div>{post.name}</div>
      <div>{post.description}</div>
      <div>{post.date}</div>
      <button onClick={goBack}> 취소 </button>
    </div>
  );
}
