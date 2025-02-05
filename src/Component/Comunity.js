import "../Style/comunity.css";

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
          <h3 className="title">백석동</h3>
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
          <button className="btn back-btn" onClick={goBackHome}> 뒤로가기 </button>
        </div>
      </div>
    </div>
  );
}
