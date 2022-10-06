import React,{useState, useEffect} from "react";

import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./UserProfile.css";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();


export default function User() {
  const [data, setData] = useState([]);
  
  const [username, setUsername]= useState(cookies.get("data").user.username);
  console.log(cookies.get("data").user);
  // const [password, setPassword]= useState(cookies.get("data").user.password);
  // const [email, setEmail]= useState(cookies.get("data").user.email);
  // const [phone, setPhone]= useState(cookies.get("data").user.phone);
  // const [location, setLocation]= useState(cookies.get("data").user.location);
  

const handleUpdate =(e)=>{
  e.preventDefault();
let username = e.target.username.value;
let password = e.target.password.value;
let email = e.target.email.value;
let phone = e.target.phone.value;
let location = e.target.location.value;
console.log({location});

const newUser = {
  username: username,
  password: password,
  email: email,
  phone: phone,
  location: {city:location}
}

updateUser(newUser);
}



  async function updateUser(newUser) {
    try {
      console.log(cookies.get("data").user);
      const response = await axios.put("http://localhost:5000/edit-account",newUser ,{
        headers: {
          Authorization: `Bearer ${cookies.get("data").user.token}`,
        },
      });
      
      setUsername(response.data.username);
      // setPassword(response.data.password);
      // setEmail(response.data.email);
      // setPhone(response.data.phone);
      // setLocation(response.data.location);


      // cookies.set('data', response.data.user, {path: '/'});
      // cookies.set("data",response.data.user)
      // console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  } 

  useEffect(() => {
   
  }, [username]);

  return (
    <div className="user">
     
      <div className="userTitleContainer rounded">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop rounded">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{username}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{username}</span>
            </div>
         
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+962 123 456 678</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">ttttt@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Amman | JORDAN</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit Account</span>
          <form className="userUpdateForm" onSubmit={handleUpdate}>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                name="username"
                  type="text"
                  placeholder="johnnike99"
                  className="userUpdateInput rounded"
                 
                />
              </div>
              <div className="userUpdateItem">
                <label>New Password</label>
                <input
                name="password"
                  type="text"
                  placeholder="******"
                  className="userUpdateInput rounded"
                 
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                name="email"
                  type="email"
                  placeholder="ttttt@gmail.com"
                  className="userUpdateInput rounded"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                name="phone"
                  type="text"
                  placeholder="+962 123 456 678"
                  className="userUpdateInput rounded"
                />
              </div>
              <div className="userUpdateItem">
                <label>Location</label>
                <input
                name="location"
                  type="text"
                  placeholder="Amman | JORDAN"
                  className="userUpdateInput rounded"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
