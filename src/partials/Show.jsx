import React from 'react';
import Agent from '../images/agent.png';
import  {AiOutlineSearch} from 'react-icons/ai'

const Show = () => {
  return (
    <div id="section-1" className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px] px-4 md:px-0 items-center justify-between'>
            
            <div className='flex flex-col justify-between gap-4 px-20'>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4">
                Giving superpowers to customer support agent
                </h1>

                <p className='py-2 text-lg text-gray-600'>Try Kelo Now.</p>
                
            </div>
            
            <div className='py-10'>
                <img  src={Agent} className="md:order-last  order-first h-[400px] w-[800px]" />
            </div>



        </div>
        

    </div>
  )
}

export default Show