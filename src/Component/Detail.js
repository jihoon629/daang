export default function Detail({ goBack, post, onDelete }) {
  if (!post) {
    return (
      <div>
        <h1>게시글을 찾을 수 없습니다.</h1>
        <button onClick={goBack}>뒤로 가기</button>
      </div>
    );
  }

  const handleDelete = () => {
    onDelete(post.id);
  };

  return (
    <div className="fied">
      <div className="detail">
        <h1 className="detail-header">{post.name}</h1>
        {post.image && (
          <img src={post.image} alt="상품 이미지" className="detail-image" />
        )}
        <p className="detail-price">가격: {post.price}원</p>
        <p>{post.priceNegotiable ? "가격 제안 가능" : "가격 제안 불가"}</p>
        <div className="detail-description">설명: {post.description}</div>
      </div>

      <div className="button-container">
          <button className="detail-button" onClick={goBack}>뒤로 가기</button>&nbsp;&nbsp;&nbsp;
          <button className="detail-button" onClick={handleDelete}>판매 완료</button>
        </div>
    </div>
  );
}
