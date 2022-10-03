import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import logo from '../../img/mr-del.jpg';
import 'react-toastify/dist/ReactToastify.css';
// import axios from "axios";

export default function UserProfile() {
  const navigate = useNavigate();

  const notify = () => toast('​🚩​Account Deleted  ❌​❌​ ');
  const handleSubmit = (event) => {
    event.preventDefault();

    event.target.reset();
  };

  const handleEditUser = () => {
    navigate('/editprofile');
  };

  return (
    <section className=' bg-white pb-100  '>
      <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md pb-100'>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-yellow-500   hover:shadow-md cursor-pointer'>
          Account Info
        </h2>
        <form action='#' className='space-y-8' onSubmit={handleSubmit}>
          <div>
            <label className='block mb-2 text-xl font-medium text-yellow-500  hover:shadow-md '>
              Your name
            </label>
            <input type='text' placeholder='tasneem'></input>
          </div>
          <div>
            <label className='block mb-2 text-xl font-medium text-yellow-500  hover:shadow-md '>
              Your email
            </label>
            <input type='text' placeholder='ttt@gmail.com'></input>
          </div>
          <div>
            <label className='block mb-2 text-xl font-medium text-yellow-500  hover:shadow-md '>
              Your password
            </label>
            <input type='text' placeholder='123'></input>{' '}
          </div>
          <div>
            <label className='block mb-2 text-xl font-medium text-yellow-500  hover:shadow-md '>
              Your address
            </label>
            <input type='text' placeholder='amman-jordan'></input>{' '}
          </div>

          <button
            className='bg-transparent font-xl font-extrabold hover:bg-yellow-500 text-grey-700  hover:text-white py-2 px-4 border ml-5 border-yellow-500 hover:border-transparent rounded'
            onClick={handleEditUser}
          >
            Edit Account
          </button>

          <button
            className='bg-transparent font-xl font-extrabold hover:bg-yellow-500 text-grey-700  hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded'
            onClick={notify}
          >
            Delete Account
          </button>
          <ToastContainer />
        </form>
        <img
          src={logo}
          className='max-w-l flex flex-wrap justify-center h-auto '
          alt='...'
        />
      </div>
    </section>
  );
}
