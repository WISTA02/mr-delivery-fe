import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import NotFound from '../img/NotFound.svg';


const RowContainer = ({ flag, data, scrollValue }) => {

  const rowContainer = useRef();

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-3  my-12 scroll-smooth  ${flag
        ? 'overflow-x-scroll scrollbar-none'
        : 'overflow-x-hidden flex-wrap justify-center'
        }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className='pb-6 cursor-pointer w-450 h-[175px] min-w-[275px] md:w-300 md:min-w-[450px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'
          >
            <div className='w-full flex items-center justify-between'>
              <motion.div className='w-100 h-40 -mt-8 drop-shadow-2xl'>
                <img
                  style={{ width: '100%', height: '80%' }}
                  src={item.image.cover}
                  alt=''
                  className='w-full h-full object-cover rounded-md'
                />
              </motion.div>
            </div>

            <div className='w-full flex flex-col items-start justify-end -mt-5'>
              <p className='text-textColor font-semibold text-base md:text-lg'>
                {item?.name}
              </p>
              {/* <p className='mt-1 text-sm text-gray-500'>{item?.description}</p> */}
              <div className='flex items-center gap-8'>
                <p className='text-lg text-headingColor font-semibold'>
                  <span className='text-sm text-red-500'>Delivery : </span>{' '}
                  <span className='text-sm'>2 jd</span>
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className='w-full flex flex-col items-center justify-center'>
          <img src={NotFound} className='h-340' alt=''/>
          <p className='text-xl text-headingColor font-semibold my-2'>
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
