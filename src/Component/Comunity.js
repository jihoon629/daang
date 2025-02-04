import "../Style/comunity.css";

export default function Comunity({ goBack, onComunity_write, posts }) {

  return (
    <div>
        <h1>커뮤니티</h1>
        <div className="fied">
            <h2>게시글 목록</h2>
            {posts.length === 0 ? (
              <p>작성된 게시글이 없습니다.</p>
            ) : (
              posts.map((post, index) => (
                <div key={index} className="post">
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                </div>
              ))
            )}
        </div>
        <button onClick={onComunity_write}>글쓰기</button>
        <button onClick={goBack}> 뒤로가기 </button>
    </div>
  );
}