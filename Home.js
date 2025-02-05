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
      <h1 className="page-title">당근마켓</h1>
      <div className="nav">
        <div>
          {posts.map((post) => (
            <div
              key={post.id}
              className="detail"
              onClick={() => onDetailClick(post.id)}
            >
              <img src={post.image} alt="상품 이미지" className="detail-img" />
              <div className="detail-info">
                <p className="detail-name">{post.name}</p>
                <p className="detail-price">가격: {post.price}원</p>
                <p className="detail-negotiable">
                  {post.priceNegotiable ? "네고 가능" : "네고 불가"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="button-container">
        <button className="action-button" onClick={onWriteClick}>
          글쓰기
        </button>
        <button className="action-button" onClick={onComunityClick}>
          커뮤니티
        </button>
      </div>
    </div>
  );
}
