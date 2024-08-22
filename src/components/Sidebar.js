import React from 'react';
// import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Sidebar = ({ isOpen, setToggleMenu, menu }) => {
  const handleCloseMenu = () => {
    setToggleMenu((prev) => false);
  };

  return (
    <div
      className={`md:hidden fixed top-0 right-0 ${
        isOpen ? `-translate-x-0` : `translate-x-full`
      } flex flex-col pt-32 px-6 bg-white w-56 h-screen z-5 transition ease-in-out duration-700`}
    >
      <button className='fixed top-6 right-2'>
        <XMarkIcon onClick={handleCloseMenu} className='w-7 h-7' />
      </button>

      {menu.map((menu) => (
        <div key={menu} className='m-2 p-2 text-border_gray font-semibold'>
          <span className='text-lg text-start'>{menu}</span>
          {/* <Link to={`/shop/${menu}`} className='text-lg text-start'>
            {menu}
          </Link> */}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
