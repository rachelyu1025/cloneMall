import React from 'react';
import { useState } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { UserIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

const Menu = ({ auth, setAuth }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleCheckLogin = () => {
    // 로그인 여부 파악
    // 로그인 o - 로그인페이지로 이동
    // 로그인 x - 로그아웃

    if (auth) {
      const isLogout = window.confirm('로그아웃하시겠습니까?');
      if (isLogout) setAuth((prev) => false);
    } else {
      navigate('/Login');
    }
  };

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const menu = ['PERFUME', 'HAND&LIP', 'BODY', 'HOME FRAGRANCE', 'STORE'];

  return (
    <div className='flex items-center space-x-3 lg:space-x-6 xl:mr-8'>
      <div className='hidden md:block md:mx-4 xl:mr-10'>
        {menu.map((menu) => (
          <span
            key={menu}
            className='m-1.5 font-medium text-md lg:text-lg xl:text-xl'
          >
            {menu}
          </span>
          // <Link
          //   to={`/shop/${menu}`}
          //   key={menu}
          //   className='m-1.5 font-medium text-md lg:text-lg xl:text-xl'
          // >
          //   {menu}
          // </Link>
        ))}
      </div>

      <Search />

      {/* mypage */}
      <UserIcon onClick={handleCheckLogin} className=' w-6 h-6 lg:w-8 lg:h-8' />

      {/* cart */}
      <ShoppingBagIcon className='hidden md:block w-6 h-6 lg:w-8 lg:h-8' />

      <button onClick={handleToggleMenu} className='md:hidden'>
        <Bars3Icon className='w-8 h-8' />
      </button>

      <Sidebar isOpen={isOpen} setToggleMenu={setIsOpen} menu={menu} />
    </div>
  );
};

export default Menu;
