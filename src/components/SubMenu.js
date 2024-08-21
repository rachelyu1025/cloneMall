import React from 'react';

const SubMenu = ({ currSubMenu, subMenu, onClick }) => {
  const current = currSubMenu ? currSubMenu : subMenu[0];

  const handleClick = (type) => {
    onClick((prev) => type);
  };

  return (
    <div className='flex m-4'>
      {subMenu?.map((type) => (
        <div key={type} className={`${type === current ? 'border-b-2' : ''}`}>
          <button
            onClick={() => handleClick(type)}
            className={`mx-2 font-semibold ${'text-border_gray'}`}
          >
            {type.replaceAll('-', ' ')}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SubMenu;
