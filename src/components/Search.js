import React, { useState } from 'react';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [isSearch, setIsSearch] = useState(false);

  const navigate = useNavigate();

  const handleSearchBtn = () => {
    setIsSearch((prev) => !prev);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const keyword = e.target.value;

      navigate(`/?q=${keyword}`);
    }
  };

  return (
    // <div className='flex md:hidden lg:flex lg:space-x-3'>
    <div className='flex ml-3 lg:space-x-3'>
      <button onClick={handleSearchBtn}>
        <MagnifyingGlassIcon className='w-6 h-6 md:mr-2 hover:cursor-pointer lg:mr-0' />
      </button>

      <div className={`${!isSearch && 'hidden'} w-[80%] lg:inline-block`}>
        <input
          type='text'
          placeholder=' search here!'
          onKeyDown={(e) => handleSearch(e)}
          className={`w-full border-border_gray border-b-2 focus:outline-none`}
        />
      </div>
    </div>
  );
};

export default Search;
