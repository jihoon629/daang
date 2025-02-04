import React from "react";
import "../Style/Home.css";
import "../Style/RayOut.css";
export default function Home({
  onWriteClick,
  onComunityClick,
  onDetailClick,
  posts,
}) {
  console.log(posts);
  return (
    <div>
      <h1>당근마켓</h1>
      <div className="nav">
        <div className="detail" onClick={() => onDetailClick()}>
          이거 누르면 세부정보로 이동해요
        </div>

        <div className="detail" onClick={() => onDetailClick()}>
          최신 항목 {posts.length > 0 ? posts[0].name : ""}
        </div>
      </div>
      <button onClick={onWriteClick}> 글쓰기 </button>
      <button onClick={onComunityClick}> 커뮤니티 </button>
    </div>
  );
}
