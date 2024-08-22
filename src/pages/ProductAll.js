import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const ProductAll = () => {
  // 전체 상품 데이터
  const [data, setData] = useState([]);

  // api 호출 함수
  const getProducts = async () => {
    await axios
      .get(process.env.REACT_APP_URL)
      .then((res) => {
        setData((prev) => res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='grid grid-cols-2 gap-3 md:px-4 lg:grid-cols-3'>
      {data?.map((el) => (
        <ProductCard key={el.title} item={el} />
      ))}
    </div>
  );
};

export default ProductAll;
