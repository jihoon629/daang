import React from "react";
import { IoArrowBack } from "react-icons/io5";
import "../Style/comunityBoard.css"; // CSS 파일 임포트

export default function ComunityBoard({ post, goBackComunity }) {
  return (
    <div className="main-container">
      <div className="backicon" onClick={goBackComunity}> 
        <IoArrowBack size="25" title="뒤로가기"/> 커뮤니티
      </div>
      <div className="post-container">
        <p className="post-id">작성자 ID: {post.id}</p>
        <h1 className="post-title">{post.title}</h1>
        <p className="post-content">{post.content}</p>
      </div>
    </div>
  );
}
