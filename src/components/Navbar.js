import React from 'react';
import Logo from './Logo';
// import Menu from './Menu';
import { UserIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import Search from './Search';
const Navbar = () => {
  return (
    <div className='relative flex justify-between mx-5 my-3 items-center '>
      {/* logo */}
      <Logo />

      {/* <Menu /> */}

      {/* <div className='hidden md:flex md:space-x-5'> */}
      <div className='flex space-x-3 md:space-x-5'>
        <Search />
        {/* mypage */}
        <UserIcon className='w-6 h-6 lg:w-8 lg:h-8' />

        {/* cart */}
        <ShoppingBagIcon className='w-6 h-6 lg:w-8 lg:h-8' />
      </div>
    </div>
  );
};

export default Navbar;
