import React from 'react';
import { motion } from 'framer-motion';
import NotFound from '../img/NotFound.svg';
import { Link } from 'react-router-dom';

const RowContainer = ({ flag, data, rowContainer }) => {
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
          <Link to={`/restaurant/${item?.restaurant_id}`}>
            <div
              key={item?.id}
              className='w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px] border-slate-200 border-4 bg-white rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'
            >
              <div className='w-full flex items-center justify-between'>
                <motion.div
                  className='w-24 h-auto -mt-8 drop-shadow-2xl'
                  whileHover={{ scale: 1.2 }}
                >
                  <img
                    src={item?.image}
                    alt=''
                    className='w-full max-h-20 rounded-full object-contain mb-6'
                  />
                </motion.div>
              </div>
              <div className='w-full flex flex-col items-end justify-end -mt-8'>
                <p className='text-textColor font-semibold text-base md:text-lg'>
                  {item?.name}
                </p>
                <p className='mt-1 text-sm text-gray-500'>{item?.name}</p>
                <div className='flex items-center gap-8'>
                  <p className='text-lg text-headingColor font-semibold flex gap-12'>
                    <p className='line-through decoration-red-500 font-sans italic text-md text-gray-400'>
                      $ {item?.price}{' '}
                    </p>

                    <p className='font-sans italic text-md'>
                      $ {item?.price - item?.price * (10 / 100)}{' '}
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className='w-full flex flex-col items-center justify-center'>
          <img src={NotFound} className='h-540' alt='' />
          <p className='text-xl text-headingColor font-semibold my-2'>
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;