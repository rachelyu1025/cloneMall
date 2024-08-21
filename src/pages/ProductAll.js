import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SubMenu from '../components/SubMenu';

const ProductAll = () => {
  const { id } = useParams();
  const location = useLocation();

  // 현재 메뉴의 데이터
  const [products, setProducts] = useState({});

  const subMenulist = Object.keys(products);

  const [currSubMenu, setCurrSubMenu] = useState('');
  const [curProducts, setCurProducts] = useState([]);

  useEffect(() => {
    console.log('올', location.state);

    // console.log(`effect!!`, currSubMenu);

    const data = location.state;

    setProducts((prev) => data);

    currSubMenu && setCurProducts((prev) => data[currSubMenu]);
  }, [id, location, currSubMenu, curProducts]);

  return (
    <div>
      {/* buttons */}
      <SubMenu
        currsubMenu={currSubMenu}
        subMenu={subMenulist}
        onClick={setCurrSubMenu}
      />

      {/* items */}
      <div className='grid grid-cols-2 gap-2 md:px-4 lg:grid-cols-3'>
        {products &&
          currSubMenu &&
          products[currSubMenu].map((item) => <ProductCard item={item} />)}
      </div>
    </div>
  );
};

export default ProductAll;
