import React, { useState } from "react";
import Home from "./Component/Home";
import Detail from "./Component/Detail";
import Write from "./Component/Write";
import Comunity from "./Component/Comunity";
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const goBack = () => {
    setCurrentPage("home");
    // renderPage();
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <Home
            onWriteClick={() => setCurrentPage("write")}
            onDetailClick={() => setCurrentPage("detail")}
            onComunityClick={() => setCurrentPage("comunity")}
          />
        );
      // return <Home MoveWrite={MoveWrite} MoveComunity={MoveComunity} />;

      case "detail":
        return <Detail goBack={goBack} />;
      case "write":
        return <Write goBack={goBack} />;
      case "comunity":
        return <Comunity goBack={goBack} />;
      default:
        return <Home />;
    }
  };
  return <div>{renderPage()}</div>;
}
