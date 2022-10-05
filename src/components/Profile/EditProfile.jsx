import React from 'react';
import enjoy1 from '../../img/enjoy.jpg';

function EditProfile() {
  const handleSubmit = (event) => {
    event.preventDefault();

    event.target.reset();
  };

  return (
    <section className=' dark:bg-gray-300 '>
      <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md pb-100'>
        <h2 className='mb-4 text-4xl  font-extrabold text-center text-yellow-500  hover:shadow-md cursor-pointer'>
          Edit User Profile
        </h2>
        <form action='#' className='space-y-8' onSubmit={handleSubmit}>
          <div>
            <label className='block mb-2 text-xl font-medium text-yellow-500  hover:shadow-md cursor-pointer'>
              Your name
            </label>
            <input
              type='name'
              id='email'
              className='shadow-sm bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   '
              placeholder='full name'
              required
            />
          </div>
          <div>
            <label className='block mb-2 text-xl font-medium text-yellow-500 '>
              Your email
            </label>
            <input
              type='email'
              id='email'
              className='shadow-sm bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   '
              placeholder='name@flowbite.com'
              required
            />
          </div>
          <div>
            <label className='block mb-2 text-xl font-medium text-yellow-500 '>
              Your password
            </label>
            <input
              type='password'
              id='password'
              className='shadow-sm bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   '
              placeholder='******'
              required
            />
          </div>
          <div>
            <label className='block mb-2 text-xl font-medium text-yellow-500 '>
              Your address
            </label>
            <input
              type='address'
              id='address'
              className='shadow-sm bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   '
              placeholder='******'
              required
            />
          </div>

          <button
            type='submit'
            className='bg-transparent font-xl font-extrabold hover:bg-yellow-500 text-grey-700  hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded'
          >
            Update
          </button>
        </form>
      </div>
      <img
        src={enjoy1}
        className='max-w-l flex flex-wrap justify-center h-auto'
        alt='...'
      />
      <br />
    </section>
  );
}

export default EditProfile;
