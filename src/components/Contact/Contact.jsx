import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container mb-8">
        <div className="row">
          <div className="mb-4 text-4xl tracking-tight font-extrabold text-center text-yellow-500  dark:text-white hover:shadow-md cursor-pointer">
           <br/>
            <h1>Have Some Question?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="block mb-2 text-xl font-medium text-yellow-500 dark:text-gray-700 hover:shadow-md ">
            <img
              src="/assets/contact.png"
              alt="Contact Us"
              height="200px"
              width="200px"
            />
          </div>
          <div className="col-md-6">
            <form>
              <div class="block mb-2 text-xl font-medium text-yellow-500 dark:text-gray-700 hover:shadow-md ">
                <label for="exampleForm" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleForm"
                  placeholder="John Smith"
                />
              </div>
              <div class=" block mb-2 text-xl font-medium text-yellow-500 dark:text-gray-700 hover:shadow-md ">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="block mb-2 text-xl font-medium text-yellow-500 dark:text-gray-700 hover:shadow-md ">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" class="bg-transparent font-xl font-extrabold hover:bg-yellow-500 text-grey-700  hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
