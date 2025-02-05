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
          {/* <div className="detail" onClick={() => onDetailClick()}>
            이거 누르면 세부정보로 이동해요
          </div> */}
  
          <div className="detail" onClick={() => onDetailClick()}>
            {/* 최신 항목 {posts.length > 0 ? posts[0].name : ""} */}
  
            {posts.map((posts) => (
              <p className="detail_1">
                <div key={posts.id}>
                  <img src={posts.image} alt=""/> {/*물품 이미지*/}
                  {posts.name} {/*물품 이름*/}
                  {posts.price} {/*물품 가격*/}
                  등록 일자 : {new Date(posts.date).getFullYear()}년 {new Date(posts.date).getMonth()+1}월 {new Date(posts.date).getDate()}월
                  {/*물품 등록 날짜jj*/}
                </div>
              </p>
            ))}
          </div>
        </div>
        <button onClick={onWriteClick}> 글쓰기 </button>
        <button onClick={onComunityClick}> 커뮤니티 </button>
      </div>
    );
  }