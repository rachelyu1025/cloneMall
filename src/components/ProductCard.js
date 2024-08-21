import React from 'react';

const ProductCard = ({ item }) => {
  return (
    <div className='flex flex-col'>
      <img src={item.img} alt={item.title} />
      <div>{item.new && 'new'}</div>
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
  );
};

export default ProductCard;
