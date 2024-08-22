import React from 'react';

const ProductCard = ({ item }) => {
  return (
    <div className='flex flex-col hover:w-[102%] hover:cursor-pointer'>
      {/* 상품이미지 */}
      <img src={item.img} alt={item.title} />

      {/* 상품 정보 */}
      <div className='flex flex-col p-2'>
        <div className={`w-14 h-6 font-semibold`}>{item.new && '✨ new'}</div>
        <strong>{item.title}</strong>
        <span>{item.price}</span>
        <div>
          <span>
            {item['fragrant'].map((el, idx) =>
              idx < item['fragrant'].length - 1 ? `${el} | ` : el
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
