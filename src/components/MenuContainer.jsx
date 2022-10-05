import React, { useState } from 'react';
import { IoFastFood } from 'react-icons/io5';
import { motion } from 'framer-motion';
import Restaurants from './Restaurants';
import { useStateValue } from '../context/StateProvider';
const MenuContainer = () => {
  const [filter, setFilter] = useState("pizza");

  const [{ restItems }] = useStateValue();

  return (
    <section className='w-full m-0 p-0' id='menu'>
      <div className='w-full flex flex-col items-center justify-center'>
        <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto'>
          Restaurants
        </p>

        <div className='w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none '>
        <motion.div
            whileTap={{ scale: 0.75 }}
            className={`group trial ${filter === "pizza" ? 'bg-cartNumBg' : 'bg-card'} w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg trial `}
            onClick={() => setFilter("pizza")}
          >
            <div
              className={`w-10 h-10 rounded-full shadow-lg ${filter === "pizza" ? 'bg-white' : 'bg-cartNumBg'} group-hover:bg-white flex items-center justify-center `}
            >
              <IoFastFood
                className={`${filter === "pizza"
                    ? 'text-textColor'
                    : 'text-white'
                  } group-hover:text-textColor text-lg `}
              />
            </div>
            <p className={`text-sm text-textBlack`}>Pizza</p>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.75 }}
            className={`group trial ${filter === "pasta" ? 'bg-cartNumBg' : 'bg-card'} w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg trial `}
            onClick={() => setFilter('pasta')}
          >
            <div
              className={`w-10 h-10 rounded-full shadow-lg ${filter === "pasta" ? 'bg-white' : 'bg-cartNumBg'} group-hover:bg-white flex items-center justify-center `}
            >
              <IoFastFood
                className={`${filter === "pasta"
                    ? 'text-textColor'
                    : 'text-white'
                  } group-hover:text-textColor text-lg `}
              />
            </div>
            <p className={`text-sm text-textBlack`}>Pasta</p>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.75 }}
            className={`group trial ${filter === "meat" ? 'bg-cartNumBg' : 'bg-card'} w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg trial `}
            onClick={() => setFilter("meat")}
          >
            <div
              className={`w-10 h-10 rounded-full shadow-lg ${filter === "meat" ? 'bg-white' : 'bg-cartNumBg'} group-hover:bg-white flex items-center justify-center `}
            >
              <IoFastFood
                className={`${filter === "meat"
                    ? 'text-textColor'
                    : 'text-white'
                  } group-hover:text-textColor text-lg `}
              />
            </div>
            <p className={`text-sm text-textBlack`}>Meat</p>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.75 }}
            className={`group trial ${filter === "burger" ? 'bg-cartNumBg' : 'bg-card'} w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg trial `}
            onClick={() => setFilter("burger")}
          >
            <div
              className={`w-10 h-10 rounded-full shadow-lg ${filter === "burger" ? 'bg-white' : 'bg-cartNumBg'} group-hover:bg-white flex items-center justify-center `}
            >
              <IoFastFood
                className={`${filter === "burger"
                    ? 'text-textColor'
                    : 'text-white'
                  } group-hover:text-textColor text-lg `}
              />
            </div>
            <p className={`text-sm text-textBlack`}>Burger</p>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.75 }}
            className={`group trial ${filter === "chicken" ? 'bg-cartNumBg' : 'bg-card'} w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg trial `}
            onClick={() => setFilter("chicken")}
          >
            <div
              className={`w-10 h-10 rounded-full shadow-lg ${filter === "chicken" ? 'bg-white' : 'bg-cartNumBg'} group-hover:bg-white flex items-center justify-center `}
            >
              <IoFastFood
                className={`${filter === "chicken"
                    ? 'text-textColor'
                    : 'text-white'
                  } group-hover:text-textColor text-lg `}
              />
            </div>
            <p className={`text-sm text-textBlack`}>Chicken</p>
          </motion.div>

        </div>

        <div className='w-full'>
          <Restaurants
            flag={false}
            data={restItems?.filter((n) => n.category[0] === filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
