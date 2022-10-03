import React, { useState } from 'react';
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
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
    <header className='fixed z-50 w-screen  px-4 md:p-6 md:px-16 bg-primary'>
      <nav className='bg-primary px-2 sm:px-4 py-2.5 dark:bg-primary fixed w-full z-20 top-0 left-0  mt-2'>
        <div className='container flex flex-wrap justify-between items-center mx-auto'>
          <a href='https://flowbite.com/' className='flex items-center'>
            <img
              src='https://pbs.twimg.com/media/Fdv50RTXoAExyH8?format=png&name=small'
              className='mr-3  h-20  sm:h-9'
              alt='Flowbite Logo'
            />
            <span className='self-center text-2xl font-bold whitespace-nowrap dark:text-textColor '>
              Mr.Delivery
            </span>
          </a>
          <div className='flex md:order-2 gap-4'>
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
            <div>
              <div className='dropdown dropdown-end'>
                <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                  <div className='w-10 rounded-full'>
                    <img src='https://placeimg.com/80/80/people' />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52'
                >
                  <li>
                    <Link className='' to='/userprofile'>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/orderhistory"> Order history</Link>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
            <Link to='/signup'>
              <button
                type='button'
                className='text-textColor bg-yellow-300 hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-yellow-400 dark:hover:bg-black dark:focus:ring-white dark:hover:text-white'
              >
                Get started
              </button>
            </Link>
            <button
              data-collapse-toggle='navbar-sticky'
              type='button'
              className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-primary focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='navbar-sticky'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
          <div
            className='hidden justify-between items-center w-full md:flex md:w-auto md:order-1'
            id='navbar-sticky'
          >
            <ul className='flex flex-col  p-4 mt-4 bg-primary rounded-lg border border-primary md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-primary dark:bg-primary md:dark:bg-primary dark:border-primary'>
              <Link to='/'>
                <li>
                  <a
                    href='#'
                    className='block py-2 pr-4 pl-3 text-lg text-textColor rounded  md: md:hover:text-gray-900 md:p-0 md:dark:hover:text-gray-900 dark:text-textColor dark: dark:hover:text-gray-900  dark:border-gray-700'
                    aria-current='page'
                  >
                    Home
                  </a>
                </li>
              </Link>
              <Link to='/about'>
                <li>
                  <a
                    href='#'
                    className='block py-2 pr-4 pl-3 text-lg text-textColor rounded  md: md:hover:text-gray-900 md:p-0 md:dark:hover:text-gray-900 dark:text-textColor dark: dark:hover:text-gray-900  dark:border-gray-700'
                  >
                    About
                  </a>
                </li>
              </Link>
              <li>
                <a
                  href='#'
                  className='block py-2 pr-4 pl-3 text-lg text-textColor rounded  md: md:hover:text-gray-900 md:p-0 md:dark:hover:text-gray-900 dark:text-textColor dark: dark:hover:text-gray-900  dark:border-gray-700'
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href='#'
                  className='block py-2 pr-4 pl-3 text-lg text-textColor rounded  md: md:hover:text-gray-900 md:p-0 md:dark:hover:text-gray-900 dark:text-textColor dark: dark:hover:text-gray-900  dark:border-gray-700'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
