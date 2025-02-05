import React from "react";

export default function detail({ goBack }) {
  return (
    <div>
      <h1>디테일</h1>

      <button onClick={goBack}> 취소 </button>
    </div>
  );
}
