import React from "react";

export default function Comunity({ goBack }) {
  return (
    <div>
      <h1>커뮤니티</h1>

      <button onClick={goBack}> 취소 </button>
    </div>
  );
}
