import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/'>
      <img src='./assets/logo.svg' alt='logo' className='w-40 md:w-52' />
    </Link>
  );
};

export default Logo;
