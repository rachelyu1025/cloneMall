import React, { useState } from 'react';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Search = () => {
  const [isSearch, setIsSearch] = useState(false);

  const handleSearch = () => {
    setIsSearch((prev) => !prev);
  };

  return (
    // <div className='flex md:hidden lg:flex lg:space-x-3'>
    <div className='flex ml-3 lg:space-x-3'>
      <button onClick={handleSearch}>
        <MagnifyingGlassIcon className='w-6 h-6 md:mr-2 hover:cursor-pointer lg:mr-0' />
      </button>

      <div className={`${!isSearch && 'hidden'} w-[80%] lg:inline-block`}>
        <input
          type='text'
          placeholder=' search here!'
          className={`w-full border-border_gray border-b-2 focus:outline-none`}
        />
      </div>
    </div>
  );
};

export default Search;
