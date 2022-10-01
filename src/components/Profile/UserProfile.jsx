
import React,{useState} from 'react';
import EditProfile from './EditProfile';
import styles from './UserProfile.module.css';
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const navigate = useNavigate();


  return (
    
<div className={styles.user}>
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
       <button className={styles.btn_user} onClick={navigate("/editprofile")}>Edit Account</button>
       <button className={styles.btn_user}>Delete Account</button>
    </div>
  );
}

