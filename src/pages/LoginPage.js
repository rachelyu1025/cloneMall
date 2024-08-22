import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const handleLogin;

  return (
    <div className='flex w-screen h-[80vh] lg:h-[90vh] lg:justify-center'>
      <div className='hidden md:flex justify-center items-center w-1/2 h-full'>
        <img
          src='https://i.pinimg.com/564x/26/69/d8/2669d87106d692fafd46590df6cfd405.jpg'
          alt=''
          className='w-full lg:w-[70%] lg:h-3/4'
        />
      </div>
      <div className='flex flex-col px-[20%] py-[30%] space-y-12 w-full md:w-1/2 md:py-36 md:px-16 lg:px-24'>
        <strong className='text-xl font-medium'>SIGN IN</strong>

        <form onSubmit={() => {}} className='flex flex-col space-y-8 lg:pr-10'>
          <div className='border-b-2'>
            <label htmlFor='username' className='hidden'>
              UserName
            </label>
            <input
              id='username'
              type='text'
              value={username}
              placeholder=' Username'
              onChange={(e) => setUsername(e.target.value)}
              className='w-full focus:outline-none'
            />
          </div>

          <div className='border-b-2'>
            <label htmlFor='password' className='hidden'>
              PASSWORD
            </label>
            <input
              id='password'
              type='password'
              value={password}
              placeholder=' Password'
              onChange={(e) => setPassword(e.target.value)}
              className='w-full focus:outline-none'
            />
          </div>

          <button className='self-end md:text-lg'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
