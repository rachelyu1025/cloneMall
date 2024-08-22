import React from 'react';
import { useLocation } from 'react-router-dom';

const DetailPage = () => {
  const location = useLocation();
  const item = location?.state;

  return (
    <div className='w-full md:flex md:items-center md:h-[80vh]'>
      <div className='md:w-1/2'>
        <img src={item.img} alt={item.title} />
      </div>
      <div className='md:ml-8 lg:ml-20'>
        <div className='flex flex-col items-start mx-2 my-4 space-y-3 lg:space-y-6'>
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

        <button className='bg-black text-white px-20 py-1 rounded mt-2 mb-4 ml-1 md:px-24 md:py-2 md:mt-8'>
          쇼핑백에 추가
        </button>
      </div>
    </div>
  );
};

export default DetailPage;
