import React, { useState, useEffect } from "react";
import Home from "./Component/Home";
import Detail from "./Component/Detail";
import Write from "./Component/Write";
import Comunity from "./Component/Comunity";
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    // 로컬스토리지에서 게시글 불러오기
    const savedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    setPosts(savedPosts);
  }, []);

  const goBack = () => {
    setCurrentPage("home");
  };

  const addPosts = (newpost) => {
    const updatePosts = [newpost, ...posts];
    setPosts(updatePosts);
    localStorage.setItem("posts", JSON.stringify(updatePosts));
    setCurrentPage("home");
  };

  const deletePosts = () => {};

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <Home
            posts={posts}
            onWriteClick={() => setCurrentPage("write")}
            onDetailClick={() => setCurrentPage("detail")}
            onComunityClick={() => setCurrentPage("comunity")}
          />
        );

      case "detail":
        return <Detail goBack={goBack} />;
      case "write":
        return <Write goBack={goBack} onSubmit={addPosts} />;
      case "comunity":
        return <Comunity goBack={goBack} onDelete={deletePosts} />;
      default:
        return <Home />;
    }
  };
  return <div>{renderPage()}</div>;
}
