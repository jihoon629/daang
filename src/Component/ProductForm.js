import React, { useState } from 'react';
import '../Style/ProductForm.css';

export default function ProductForm() {
  const [product, setProduct] = useState({ name: '', description: '', price: '', image: '',date: new Date(Date.now())});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value }); //입력필드 name속성 : 값 으로 product에 업데이트 
  };

  return (
    <div className="product-form-container">
      <div className="product-form">
        <div className="form-header" style={{ display: 'flex', alignItems: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6" style={{ width: '24px', height: '24px', marginRight: '8px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          <h2 className="form-title">내 물건 팔기</h2>
        </div>
        
        <div className="image-upload-container">
          <div className="image-preview">
            {product.image ? <img src={product.image} alt="상품 미리보기" className="image-preview-img" /> : '사진'}
          </div>
          <input type="file" accept="image/*" onChange={(e) => setProduct({ ...product, image: URL.createObjectURL(e.target.files[0]) })} />
        </div>

        <div className="form-fields">
          <div>
            <label>제목</label>
            <input name="name" value={product.name} onChange={handleChange} placeholder="제목" className="input-field" />
          </div>
          
          <div>
            <label>가격</label>
            <input name="price" type="number" value={product.price} onChange={handleChange} placeholder="₩ 가격을 입력해주세요." className="input-field" />
            <div className="checkbox-container">
              <input type="checkbox" id="priceNegotiable" />
              <label htmlFor="priceNegotiable">가격 제안 받기</label>
            </div>
          </div>
          <div>
            <label>자세한 설명</label>
            <textarea name="description" value={product.description} onChange={handleChange} placeholder="(판매 금지 물품은 게시가 제한될 수 있어요)&#10;신뢰할 수 있는 거래를 위해 자세히 적어주세요." className="input-field" />
          </div>
          <div>
            <label>거래 희망 장소</label>
            <input name="location" placeholder="장소 선택" className="input-field" />
          </div>
          <button className="submit-button" onClick={() => console.log(product)}>작성 완료</button>
        </div>
      </div>
    </div>
  );
}
