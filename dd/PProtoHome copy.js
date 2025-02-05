import React from "react";

export default function Home({ posts, onWriteClick, onPostClick }) {
  return (
    <div>
      <h1>당근마켓</h1>
      <div className="Home">
        <div className="posts">
          {posts.map((post) => (
            <div key={post.id} onClick={() => onPostClick(post.id)}>
              <h2>{post.title}</h2>
              {post.image && (
                <img
                  src={post.image}
                  alt="상품 이미지"
                  style={{ width: "100px", height: "100px" }}
                />
              )}
              <p>{post.content}</p>
              <p>{post.price}원</p>
              <p>{post.location}</p>
            </div>
          ))}
        </div>
      </div>
      <button onClick={onWriteClick}>글쓰기</button>
    </div>
  );
}
