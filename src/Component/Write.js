import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";

export default function Write({ goBack, onSubmit }) {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    priceNegotiable: false,
    date: new Date(Date.now()),
    id: Date.now(),
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct({
      ...product,
      [name]: type === "checkbox" ? checked : value, // 체크박스일 경우 checked 값을 사용
    });
  };

  return (
    <div className="product-form-container">
      <div className="product-form">
        <div
          className="form-header"
          style={{ display: "flex", alignItems: "center" }}
        >
          <IoArrowBack size="25" title="뒤로가기" onClick={goBack} />
          <h2 className="form-title">내 물건 팔기</h2>
        </div>

        <div className="image-upload-container">
          <div className="image-preview">
            {product.image ? (
              <img
                src={product.image}
                alt="상품 미리보기"
                className="image-preview-img"
              />
            ) : (
              "사진"
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setProduct({
                ...product,
                image: URL.createObjectURL(e.target.files[0]),
              })
            }
          />
        </div>

        <div className="form-fields">
          <div>
            <label>제목</label>
            <input
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="제목"
              className="input-field"
            />
          </div>

          <div>
            <label>가격</label>
            <input
              name="price"
              type="number"
              value={product.price}
              onChange={handleChange}
              placeholder="₩ 가격을 입력해주세요."
              className="input-field"
            />
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="priceNegotiable"
                name="priceNegotiable"
                onChange={handleChange}
                checked={product.priceNegotiable}
              />
              <label htmlFor="priceNegotiable">가격 제안 받기</label>
            </div>
          </div>

          <div>
            <label>자세한 설명</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              placeholder="(판매 금지 물품은 게시가 제한될 수 있어요)&#10;신뢰할 수 있는 거래를 위해 자세히 적어주세요."
              className="input-field"
            />
          </div>

          <div>
            <label>거래 희망 장소</label>
            <input
              name="location"
              onChange={handleChange}
              placeholder="장소 선택"
              className="input-field"
            />
          </div>

          <button
            className="submit-button"
            onClick={() => {
              const requiredFields = [
                product.name,
                product.description,
                product.price,
              ];
              const ifEmpty = requiredFields.some(
                (field) => field.trim() === ""
              ); //some() 배열 안의 하나라도 조건을 통과 못하면 true 반환

              if (ifEmpty) {
                alert("모든 필드를 입력해주세요."); // 비어있는 필드가 있을 경우 경고
                return; // 제출을 중단
              }

              onSubmit(product);
              console.log(product);
            }}
          >
            작성 완료
          </button>
        </div>
      </div>
    </div>
  );
}
