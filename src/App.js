import React, { useState, useEffect } from "react";
import Home from "./Component/Home";
import Detail from "./Component/Detail";
import Write from "./Component/Write";
import Comunity from "./Component/Comunity";
import ComunityWrite from "./Component/ComunityWrite"; //커뮤니티 글쓰기 추가
import ComunityBorad from "./Component/ComunityBorad";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [posts, setPosts] = useState([]);
  const [comunityPosts, setComunityPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [selectedBoardId, setSelectedBoardId] = useState(null);

  useEffect(() => {
    // 로컬스토리지에서 게시글 불러오기
    const savedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    const saveComunityPosts = JSON.parse(
      localStorage.getItem("comunityPosts") || "[]"
    );
    setPosts(savedPosts);
    setComunityPosts(saveComunityPosts);
  }, []);

  const goBackHome = () => {
    setCurrentPage("home");
  };

  const goBackComunity = () => {
    setCurrentPage("comunity");
  };

  const addPosts = (newpost) => {
    const updatePosts = [newpost, ...posts];
    setPosts(updatePosts);
    localStorage.setItem("posts", JSON.stringify(updatePosts));
    setCurrentPage("home");
  };

  const addComunityPost = (id, title, content) => {
    const newPost = { id, title, content };
    const updateComunityPosts = [newPost, ...comunityPosts];
    setComunityPosts(updateComunityPosts);
    localStorage.setItem("comunityPosts", JSON.stringify(updateComunityPosts));
    setCurrentPage("comunity"); // 글 작성 후 커뮤니티 페이지로 이동
  };

  const deletePosts = () => {};

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <Home
            posts={posts}
            onWriteClick={() => setCurrentPage("write")}
            onDetailClick={(PostId) => {
              setSelectedPostId(PostId);
              setCurrentPage("detail");
            }}
            onComunityClick={() => setCurrentPage("comunity")}
          />
        );

      case "detail":
        return (
          <Detail
            goBack={goBackHome}
            post={posts.find((p) => p.id === selectedPostId)}
          />
        );
      case "write":
        return <Write goBack={goBackHome} onSubmit={addPosts} />;
      case "comunity_write": // 새로운 ComunityWrite 페이지로 이동
        return (
          <ComunityWrite
            addPost={addComunityPost}
            goBackComunity={goBackComunity}
          />
        );
      case "comunity":
        return (
          <Comunity
            goBackHome={goBackHome}
            posts={comunityPosts}
            onComunity_write={() => setCurrentPage("comunity_write")}
            onBoardClick={(BoardId) => {
              setSelectedBoardId(BoardId);
              setCurrentPage("boardDetail");
            }}
            onDelete={deletePosts}
          />
        );
      case "boardDetail":
        return (
          <ComunityBorad
            post={comunityPosts.find((p) => p.id === selectedBoardId)}
          />
        );
      default:
        return <Home />;
    }
  };
  return <div>{renderPage()}</div>;
}
