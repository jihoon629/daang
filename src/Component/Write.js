import React from "react";

export default function Write({ goBack }) {
  return (
    <div>
      <h1>글쓰기</h1>

      <button onClick={goBack}> 취소 </button>
    </div>
  );
}
