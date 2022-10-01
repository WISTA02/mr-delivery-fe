import React, { useState } from 'react';
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';


// trial
const Header = () => {
  const navigate = useNavigate();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <header className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary'>
      {/* desktop & tablet */}
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <Link to={'/'} className='flex items-center gap-2'>
          <div className='flex'>
            <img
              src={
                'https://pbs.twimg.com/media/Fdv50RTXoAExyH8?format=png&name=small'
              }
              className='w-14 flex'
              alt='logo'
            />
            <a className='btn btn-ghost normal-case text-xl'>Mr.Delivery</a>
          </div>
        </Link>

        <div className='flex items-center gap-8'>
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className='flex items-center gap-24 '
          >
            <li className='text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
              Home
            </li>
            <li className='text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
              Menu
            </li>
            <li href="/about" className='text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
              About Us
            </li>
            <li className='text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
              Service
            </li>
          </motion.ul>

          <div
            className='relative flex items-center justify-center'
            onClick={showCart}
          >
            <MdShoppingBasket className='text-textColor text-2xl  cursor-pointer' />
            {cartItems && cartItems.length > 0 && (
              <div className=' absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                <p className='text-xs text-white font-semibold'>
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>

          <div className='relative'></div>
          <div>
            <div className='dropdown dropdown-end'>
              <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                <div className='w-10 rounded-full'>
                  <img src='https://placeimg.com/80/80/people' />
                </div>
              </label>
              <ul
                tabIndex={0}
                className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
              >
                <li>
                  <Link className='justify-between'  to="/userprofile"  >
                    Profile
                    <span className='badge'>New</span>
                
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className='flex items-center justify-between md:hidden w-full h-full '>
        <div
          className='relative flex items-center justify-center'
          onClick={showCart}
        >
          <MdShoppingBasket className='text-textColor text-2xl  cursor-pointer' />
          {cartItems && cartItems.length > 0 && (
            <div className=' absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
              <p className='text-xs text-white font-semibold'>
                {cartItems.length}
              </p>
            </div>
          )}
        </div>

        <Link to={'/'} className='flex items-center gap-2'>
          <div className='flex-1'>
            <a className='btn btn-ghost normal-case text-xl'>Mr.Delivery</a>
          </div>
        </Link>

        <div className='relative'>
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'
            >
              {user && user.email === 'vetrivel.galaxy@gmail.com' && (
                <Link to={'/createItem'}>
                  <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>
                    New Item <MdAdd />
                  </p>
                </Link>
              )}

              <ul className='flex flex-col '>
                <li
                  className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'
                  onClick={() => setIsMenu(false)}
                >
                  Home
                </li>
                <li
                  className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'
                  onClick={() => setIsMenu(false)}
                >
                  Menu
                </li>
                <li
                  className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'
                  onClick={() => setIsMenu(false)}
                >
                  About Us
                </li>
                <li
                  className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'
                  onClick={() => setIsMenu(false)}
                >
                  Service
                </li>
              </ul>

              <p
                className='m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base'
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
