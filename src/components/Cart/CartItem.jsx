import React from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { modifyquantity, modifyquantitydecrese, removeFromCart } from '../../redux/addToCart';


const CartItem = ({ item }) => {
  const { image, id, price, quantity, name } = item;
  const Select = useSelector((state) => state);
  const Dispatch = useDispatch();

  const IncreseItem = (e) => {
    const data = e.currentTarget.getAttribute('datatype').split('###');
    const [id, price, quantity, image] = data;
    const DataModefy = {
      id: id,
      price: price,
      quantity: quantity,
      image: image,
    };

    Dispatch(modifyquantity(DataModefy));
  };

  const DecreseItem = (e) => {
    const data = e.currentTarget.getAttribute('datatype').split('###');
    const [id, price, quantity, image] = data;

    const DataModefy = {
      id: id,
      price: price,
      quantity: quantity,
      image: image,
    };
    let Value = Select.addToCartSlice.allProduct.findIndex(
      (data) => data.id === DataModefy.id
    );
    if (Value !== -1) {
      let DateUse = Select.addToCartSlice.allProduct[Value].quantity;
      if (Number(DateUse) === 1) {
        Dispatch(removeFromCart(DataModefy.id));
      } else {
        Dispatch(modifyquantitydecrese(DataModefy));
      }
    }
  };

  return (
    <div className='w-full p-1 px-2 rounded-lg bg-amber-300 flex items-center gap-2'>
      <img
        src={image}
        className='w-20 h-20 max-w-[60px] rounded-full object-contain'
        alt=''
      />

      {/* name section */}
      <div className='flex flex-col gap-2'>
        <p className='text-base text-gray-5 font-semibold'>{name}</p>
        <p className='text-sm block text-gray-800 font-semibold'>
          $ {Number(price) * Number(quantity)}
        </p>
      </div>

      {/* button section */}
      <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
        <motion.div
          whiletap={{ scale: 0.75 }}
          onClick={DecreseItem}
          datatype={`${id}###${name}###${price}###${quantity}###${image}`}
        >
          <BiMinus className='text-gray-5 ' />
        </motion.div>

        <p className='w-5 h-5 rounded-sm bg-cartBg text-gray-200 flex items-center justify-center'>
          {quantity}
        </p>

        <motion.div
          whiletap={{ scale: 0.75 }}
          onClick={IncreseItem}
          datatype={`${id}###${name}###${price}###${quantity}###${image}`}
        >
          <BiPlus className='text-gray-5 ' />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
