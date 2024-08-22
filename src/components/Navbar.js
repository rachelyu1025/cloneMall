import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
const Navbar = ({ auth, setAuth }) => {
  return (
    <div className='relative flex justify-between mx-5 my-3 items-center '>
      <Logo />

      <div className='hover:cursor-pointer'>
        <Menu auth={auth} setAuth={setAuth} />
      </div>
    </div>
  );
};

export default Navbar;
