import React from 'react';
import Logo from './Logo';
// import Menu from './Menu';
import { UserIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import Search from './Search';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();

  const handleCheckLogin = () => {
    // 로그인 여부 파악
    //로그인되어있지않으면 로그인페이지로 이동
    navigate('/Login');
  };

  return (
    <div className='relative flex justify-between mx-5 my-3 items-center '>
      {/* logo */}
      <Logo />

      {/* <Menu /> */}

      {/* <div className='hidden md:flex md:space-x-5'> */}
      <div className='flex space-x-3 md:space-x-5 hover:cursor-pointer'>
        <Search />
        {/* mypage */}
        <UserIcon
          onClick={handleCheckLogin}
          className='w-6 h-6 lg:w-8 lg:h-8'
        />

        {/* cart */}
        <ShoppingBagIcon className='w-6 h-6 lg:w-8 lg:h-8' />
      </div>
    </div>
  );
};

export default Navbar;
