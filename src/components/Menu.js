import React from 'react';
import { useState } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const menu = ['PERFUME', 'HAND&LIP', 'BODY', 'HOME FRAGRANCE', 'STORE'];

  return (
    <div className='flex items-center space-x-3'>
      <div className='hidden md:block md:mx-4'>
        {menu.map((menu) => (
          <Link
            to={`/shop/${menu}`}
            key={menu}
            className='m-1.5 font-medium text-md lg:text-xl'
          >
            {menu}
          </Link>
        ))}
      </div>

      <Search />

      <button onClick={handleToggleMenu} className='md:hidden'>
        <Bars3Icon className='w-8 h-8' />
      </button>

      <Sidebar isOpen={isOpen} setToggleMenu={setIsOpen} menu={menu} />
    </div>
  );
};

export default Menu;
