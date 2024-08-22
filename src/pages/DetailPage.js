import React from 'react';
import { useLocation } from 'react-router-dom';

const DetailPage = () => {
  const location = useLocation();
  const item = location?.state;

  return (
    <div className='md:flex md:items-center w-full md:h-[80vh]'>
      <div className='md:w-1/2'>
        <img src={item.img} alt={item.title} />
      </div>
      <div className='flex flex-col items-start m-2 space-y-3 md:ml-8 lg:ml-20 lg:space-y-6'>
        <strong className='md:text-lg lg:text-xl'>{item.title}</strong>
        <button className='bg-btn_gray px-3 py-2 rounded-full'>
          {item.size}
        </button>
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
