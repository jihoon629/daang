import React from "react";
import "../Style/Home.css";
import "../Style/RayOut.css";
import { FaPen } from "react-icons/fa";
import { MdFeed } from "react-icons/md";

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
              네고 여부 (아이콘)
            </div>
          ))}
        </div>
      </div>
            {/* <FaPen onClick={onWriteClick}/>
            <MdFeed onClick={onComunityClick}/> */}
            
      <div className="bottom-navbar">
        <FaPen size="30" title="글쓰기" onClick={onWriteClick} />
        <MdFeed size="30" title="커뮤니티"  onClick={onComunityClick} />
      </div>
   
    </div>
  );
}
