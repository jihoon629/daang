import React from "react";
import "../Style/Home.css";
import "../Style/RayOut.css";

export default function Home({
  onWriteClick,
  onComunityClick,
  onDetailClick,
  posts,
}) 
{
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}년${month}월${day}일`;
  };

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
              onClick={() => onDetailClick(post.id)}>
              <img src={post.image} alt="" /> {/*물품 이미지*/}
              {post.name} {/*물품 이름*/}
              가격: {post.price} {/*물품 가격*/}
              네고 여부 (아이콘)<br/>
              등록 날짜 : {formatDate(post.date)}
            </div>
          ))}
        </div>
      </div>
      <button onClick={onWriteClick}> 글쓰기 </button>
      <button onClick={onComunityClick}> 커뮤니티 </button>
    </div>
  );
}