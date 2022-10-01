
import React,{useState} from 'react';
import EditProfile from './EditProfile';
import styles from './UserProfile.module.css';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import logo from '../../img/mr-del.jpg'
import 'react-toastify/dist/ReactToastify.css';

export default function UserProfile() {
  const navigate = useNavigate();


  const notify = () => toast("​🚩​Account Deleted  ❌​❌​ ");
  const handleSubmit = (event) => {
    event.preventDefault();

    event.target.reset();

}

  const handleEditUser =()=>{
    navigate("/editprofile")
  }
 
  return (
    <section className= " dark:bg-gray-300 pb-100  ">
      <img src={logo} className="max-w-l flex flex-wrap justify-center h-auto" alt="..." />
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md pb-100">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-yellow-500  dark:text-white hover:shadow-md cursor-pointer">Account Info</h2>
      <form action="#" className="space-y-8" onSubmit={handleSubmit}>
      <div>
              <label  className="block mb-2 text-xl font-medium text-yellow-500 dark:text-gray-700 hover:shadow-md ">Your name</label>
              <input type="text"
                    placeholder="tasneem"
                   
                    ></input>
          </div>
          <div>
              <label className="block mb-2 text-xl font-medium text-yellow-500 dark:text-gray-700 hover:shadow-md ">Your email</label>
              <input type="text"
                    placeholder="ttt@gmail.com"
                    
                    ></input>
          </div>
          <div>
              <label className="block mb-2 text-xl font-medium text-yellow-500 dark:text-gray-700 hover:shadow-md ">Your password</label>
              <input type="text"
                    placeholder="123"
                
                    ></input>          </div>
          <div>
              <label className="block mb-2 text-xl font-medium text-yellow-500 dark:text-gray-700 hover:shadow-md ">Your address</label>
              <input type="text"
                    placeholder="amman-jordan"
                    
                    ></input>          </div>
        
          <button className="bg-transparent font-xl font-extrabold hover:bg-yellow-500 text-grey-700  hover:text-white py-2 px-4 border ml-5 border-yellow-500 hover:border-transparent rounded" onClick={handleEditUser} >Edit Account</button>

       <button className="bg-transparent font-xl font-extrabold hover:bg-yellow-500 text-grey-700  hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded" onClick={notify } >Delete Account</button>
       <ToastContainer />
      </form>
  </div>
</section>

  );
}


// onClick={navigate("/editprofile")}


/* <div className={styles.user}>
        <div className={styles.user_box}>
            <h1 className={styles.h1_user} >Personal Profile</h1>
            
                <div className={styles.box_user} >
                    <label className={styles.label_user} htmlFor='name'>Username : </label>
                    <input type="text"
                    placeholder="tasneem"
                    className={styles.Form_box_input_userName}
                    ></input>
                </div>
                <div className={styles.box_user} >
                    <label className={styles.label_user} htmlFor='name'>Email : </label>
                    <input type="text"
                    placeholder="tttt@gamil.com"
                    className={styles.Form_box_input_userName}
                    ></input>
                
                </div>
                <div className={styles.box_user}>
                <label className={styles.label_user} htmlFor='password'>Password</label>
                <input type="****"
                    placeholder="**********"
                    className={styles.box_input_userName}
                    ></input>
                </div>
          
        </div>
       <button className={styles.btn_user} onClick={handleEditUser} >Edit Account</button>
       
       <button className={styles.btn_user} onClick={notify } >Delete Account</button>
       <ToastContainer />
    </div> */