import React from 'react';
import Delivery from '../img/delivery.png';
import './HomeContainer.css';

const HomeContainer = () => {
  return (
    <section className='home' id='home'>
      <div className='content'>
        {/* <h3>Order Healthy And Fresh Food Any Time</h3> */}
        <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6 '>
          <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 ml-8 rounded-full bg-flag'>
            <div className='text-xs text-orange-300 font-semibold flag'>
              Bike Delivery
            </div>
            <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
              <img
                src={Delivery}
                className='w-full h-full object-contain'
                alt='delivery'
              />
            </div>
          </div>
        </div>
        <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor '>
          The Fastest Delivery in
          <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>
            Your City
          </span>
        </p>
        <p>
          Italian food makes people think of big family dinners. So you may want
          to position your restaurant as a place to bring the whole family.
        </p>
      </div>

      <div className='image'>
        <img
          src='https://pbs.twimg.com/media/FdwHUkAXEAAmYoz?format=png&name=900x900'
          alt=''
        />
      </div>
    </section>
  );
};

export default HomeContainer;
