import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { RiRefreshFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';
import EmptyCart from '../../img/emptyCart.svg';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { isAuthenticated } from '../auth/index'
import { clearAll } from '../../redux/addToCart';


const CartContainer = () => {
  const [{ cartShow, modalShow }, dispatch] = useStateValue();
  const { user } = isAuthenticated()
  const Dispatch = useDispatch();

  const DataUse = useSelector((state) => state.addToCartSlice.allProduct);
  const [tot, setTot] = useState(0);

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };
  useEffect(() => {

    let totalprice = DataUse.reduce(function (sum, item) {
      return sum + item.quantity * item.price;
    }, 0);
    setTot(totalprice);
  }, [tot, DataUse]);

  const clearCart = (e) => {
    Dispatch(clearAll());
  };

  const showModal = () => {
    console.log('showModal');
    dispatch({
      type: actionType.SET_MODAL_SHOW,
      modalShow: !modalShow,
    });
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className='fixed top-0 right-0 w-full md:w-375 h-screen bg-amber-200 drop-shadow-md flex flex-col z-[101]'
    >
      <div className='w-full flex items-center justify-between p-4 cursor-pointer'>
        <motion.div whiletap={{ scale: 0.75 }} onClick={showCart}>
          <MdOutlineKeyboardBackspace className='text-textColor text-3xl' />
        </motion.div>
        <p className='text-grey-400 text-lg font-semibold'>Cart</p>

        <motion.p
          whiletap={{ scale: 0.75 }}
          className='flex items-center gap-2 p-1 px-2 my-2 bg-yellow-100 rounded-md hover:shadow-md font-semibold cursor-pointer text-textColor text-base'
          onClick={clearCart}
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>

      {/* bottom section */}
      {DataUse && DataUse.length > 0 ? (
        <div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col'>
          {/* cart Items section */}
          <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
            {/* cart Item */}
            {DataUse &&
              DataUse.length > 0 &&
              DataUse.map((data) => (
                <CartItem
                  key={data.id}
                  item={data}
                />
              ))}
          </div>

          {/* cart total section */}
          <div className='w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2'>
            <div className='w-full flex items-center justify-between'>
              <p className='text-yellow-400 text-lg'>Sub Total</p>
              <p className='text-yellow-400 text-lg'>$ {tot}</p>
            </div>
            <div className='w-full flex items-center justify-between'>
              <p className='text-yellow-400 text-lg'>Delivery</p>
              <p className='text-yellow-400 text-lg'>$ 2.5</p>
            </div>

            <div className='w-full border-b border-gray-600 my-2'></div>

            <div className='w-full flex items-center justify-between'>
              <p className='text-yellow-400 text-xl font-semibold'>Total</p>
              <p className='text-yellow-400 text-xl font-semibold'>
                ${tot + 2.5}
              </p>
            </div>

            {user ? (
              <motion.button
                whiletap={{ scale: 0.8 }}
                type='button'
                className='w-full p-2 rounded-full bg-gradient-to-tr from-yellow-300 to-yellow-600 text-gray-60 font-semibold text-lg my-2 hover:shadow-lg' onClick={showModal}
              >
                Check Out
              </motion.button>
            ) : (
              <motion.button
                whiletap={{ scale: 0.8 }}
                type='button'
                className='w-full p-2 rounded-full bg-gradient-to-tr from-yellow-300 to-yellow-600 text-gray-50 font-semibold text-lg my-2 hover:shadow-lg'
              >
                Login to check out
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className='w-full h-full flex flex-col items-center justify-center gap-6'>
          <img src={EmptyCart} className='w-300' alt='' />
          <p className='text-xl text-textColor font-semibold'>
            Add some items to your cart
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default CartContainer;
