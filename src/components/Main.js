import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Main = () => {
  const navigate = useNavigate();

  // 전체 상품 데이터
  const [data, setData] = useState(null);

  const handleNavigate = () => {
    navigate('/shop/hand&lip', { state: data['hand-lip'] });
  };

  // api 호출 함수
  const getProducts = async () => {
    await axios
      .get(process.env.REACT_APP_URL)
      .then((res) => {
        setData((prev) => res.data);

        return;
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, []);

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
