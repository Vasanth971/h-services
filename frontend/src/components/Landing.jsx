import React from 'react';
import Appbar from './Appbar';
import washing from '../images/washing-machine.png';
import ac from '../images/air-conditioner.png';

const Landing = () => {
  return (
    <div>
      <Appbar />
      <div className='flex flex-col items-center min-h-screen justify-center px-4 md:px-0'>
        <h1 className='text-3xl md:text-5xl font-bold mt-[100px] md:mt-[120px] text-center'>
          Home services at your Doorstep
        </h1>
        <div className='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[100px] mt-8 md:mt-16 w-full'>
          <img src={washing} alt="Washing Machine" className='w-[150px] md:w-[300px]' />
          <button className="text-white font-bold py-4 px-8 rounded-lg bg-gradient-to-r from-blue-500 to-blue-800 shadow-lg transform hover:translate-y-2 active:translate-y-5 mt-4 md:mt-0">
            Get started
          </button>
          <img src={ac} alt="Air Conditioner" className='w-[200px] md:w-[350px]' />
        </div>
      </div>
    </div>
  );
};

export default Landing;
