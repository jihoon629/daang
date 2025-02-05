import "../Style/comunity.css";
import { IoArrowBack } from "react-icons/io5";

export default function Comunity({
  goBackHome,
  onComunity_write,
  posts,
  onBoardClick,
}) {
  return (
    <div className="bigcontainer">
      <div className="container">
        <div className="fied">
          <div className="title">
            <IoArrowBack size="25" title="뒤로가기" onClick={goBackHome}/> 우리동네
          </div>
          <div className="board">
            {posts.length === 0 ? (
              <p className="empty">작성된 게시글이 없습니다.</p>
            ) : (
              posts.map((post) => (
                <div
                  key={post.id}
                  className="post"
                  onClick={() => onBoardClick(post.id)}
                >
                  <h3>{post.title}</h3>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="button">
          <button className="btn write-btn" onClick={onComunity_write}>글쓰기</button>
        </div>
      </div>
    </div>
  );
}
