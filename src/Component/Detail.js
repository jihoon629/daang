export default function Detail({ goBack, post }) {
  if (!post) {
    return (
      <div>
        <h1>게시글을 찾을 수 없습니다.</h1>
        <button onClick={goBack}>뒤로 가기</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{post.name}</h1>
      {post.image && <img src={post.image} alt="상품 이미지" style={{ width: "200px" }} />}
      <p>가격: {post.price}원</p>
      <p>{post.priceNegotiable ? "가격 제안 가능" : "가격 제안 불가"}</p>
      <p>설명: {post.description}</p>
      <button onClick={goBack}>뒤로 가기</button>
    </div>
  );
}
