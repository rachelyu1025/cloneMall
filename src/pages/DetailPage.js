import React from 'react';
import { useLocation } from 'react-router-dom';

const DetailPage = () => {
  const location = useLocation();
  const item = location?.state;

  return (
    <div>
      <img src={item.img} alt={item.title} />
      <div className='flex flex-col m-2'>
        <strong>{item.title}</strong>
        <div>{item.size}</div>
        <span>{`₩ ${item.price}`}</span>
        <span>
          {item['fragrant'].map((el, idx) =>
            idx < item['fragrant'].length - 1 ? `${el} | ` : el
          )}
        </span>
      </div>
    </div>
  );
};

export default DetailPage;
