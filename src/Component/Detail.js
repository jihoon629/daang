import React from "react";

export default function detail({ goBack, post }) {
  return (
    <div>
      <h1>디테일</h1>
      {post.id}

      <button onClick={goBack}> 취소 </button>
    </div>
  );
}
