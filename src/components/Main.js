import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/shop/hand&lip');
  };

  return (
    <div
      onClick={handleNavigate}
      className='flex justify-center w-screen h-screen lg:py-5'
    >
      <img
        src='https://i.pinimg.com/originals/42/26/5f/42265fc1ca70f5ea12072229f8bbd79b.png'
        alt='main page'
      />
    </div>
  );
};

export default Main;
