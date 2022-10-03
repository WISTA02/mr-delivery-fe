import React, { useEffect, useRef, useState } from 'react';
import HomeContainer from './HomeContainer';
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvider';
import MenuContainer from './MenuContainer';
import CartContainer from './Cart/CartContainer';
import './MainContainer.css';

const SCROLL_SPEED = 200;

const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  const rowContainer = useRef();

  const handleForwardScroll = () => {
    if (rowContainer.current) {
      const maxScroll =
        rowContainer.current.scrollWidth - rowContainer.current.clientWidth;

      setScrollValue((prev) => {
        if (prev + SCROLL_SPEED > maxScroll) return maxScroll;
        return prev + SCROLL_SPEED;
      });
    }
  };

  const handleBackScroll = () => {
    if (rowContainer.current) {
      setScrollValue((prev) => {
        if (prev - SCROLL_SPEED < 0) return 0;
        return prev - SCROLL_SPEED;
      });
    }
  };

  useEffect(() => {
    if (rowContainer.current) rowContainer.current.scrollLeft = scrollValue;
  }, [scrollValue]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center '>
      <HomeContainer />

      <section className='w-full my-6'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100'>
            Latest offers and Promotions
          </p>

          <div className='hidden md:flex gap-3 items-center'>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center'
              onClick={() => handleBackScroll()}
            >
              <MdChevronLeft className='text-lg text-white' />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center'
              onClick={() => handleForwardScroll()}
            >
              <MdChevronRight className='text-lg text-white' />
            </motion.div>
          </div>
        </div>
        <RowContainer
          rowContainer={rowContainer}
          flag={true}
          data={foodItems?.filter((n) => n.category === 'fruits')}
        />
      </section>

      <MenuContainer />

      {cartShow && <CartContainer />}
    </div>
  );
};

export default MainContainer;
