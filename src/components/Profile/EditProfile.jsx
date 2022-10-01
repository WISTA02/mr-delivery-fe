import React from 'react'


function EditProfile() {
    const handleSubmit = (event) => {
        event.preventDefault();
    
        event.target.reset();

    }


  return (


<section className="bg-white dark:bg-gray-800 pb-100">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md pb-100">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-yellow-500  dark:text-white hover:shadow-md cursor-pointer">Edit User Profile</h2>
      <form action="#" class="space-y-8" onSubmit={handleSubmit}>
      <div>
              <label  class="block mb-2 text-sm font-medium text-yellow-700 dark:text-gray-300 hover:shadow-md cursor-pointer">Your name</label>
              <input type="name" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
              placeholder="full name" required/>
          </div>
          <div>
              <label class="block mb-2 text-sm font-medium text-yellow-700 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
              placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label class="block mb-2 text-sm font-medium text-yellow-700 dark:text-gray-300">Your password</label>
              <input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="******" required/>
          </div>
          <div>
              <label class="block mb-2 text-sm font-medium text-yellow-700 dark:text-gray-300">Your address</label>
              <input type="address" id="address" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="******" required/>
          </div>
        
          <button  type="submit" class="py-3 px-5 text-sm font-medium text-center text-yellow-700 rounded-lg bg-primary-500 sm:w-fit hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Update</button>
      </form>
  </div>
</section>
  )
}

export default EditProfile

