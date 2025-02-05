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
        <div>
          {posts.map((post) => (
            <div
              key={post.id}
              className="detail"
              onClick={() => onDetailClick(post.id)}
            >
              <img src={post.image} alt="" /> {/*물품 이미지*/}
              {post.name} {/*물품 이름*/}
              가격: {post.price} {/*물품 가격*/}
            </div>
          ))}
        </div>
      </div>
      <button onClick={onWriteClick}> 글쓰기 </button>
      <button onClick={onComunityClick}> 커뮤니티 </button>
    </div>
  );
}
