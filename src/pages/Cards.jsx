import React from 'react';
import Single from '../images/favicon.png';
import Jay from '../images/jay.png';
import Matteo from '../images/matteo.png';
import Vivek from '../images/vivek.jpg';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-35 mx-auto mt-[-3rem] bg-transparent relative rounded-full' src={Vivek} width="96" height="96" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Vivek D.</h2>
              <p className='text-center text-2xl font-bold'>CEO</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Chief Executive Officer</p>
              </div>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-35 mx-auto mt-[-3rem] bg-transparent relative rounded-full' src={Jay} width="96" height="96" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Jayesh K.</h2>
              <p className='text-center text-2xl font-bold'>CTO</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Chief Technology Officer</p>
              </div>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-35 mx-auto mt-[-3rem] bg-transparent relative rounded-full' src={Matteo} width="96" height="96" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Matteo V.</h2>
              <p className='text-center text-2xl font-bold'>CSO</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Chief Sales Officer</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Cards;