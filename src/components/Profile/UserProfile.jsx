import React, { useState } from "react";
import { LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./UserProfile.css";
import userIcon from '../../img/userIcon.jpg'
import userSetting from '../../img/userSetting.jpg'
import { updateUserInfo } from '../../api/api'
import { isAuthenticated, logOut, signIn } from "../auth";
import { useNavigate } from 'react-router-dom';

export default function User() {
  const { user } = isAuthenticated()
  const navigate = useNavigate();

  const [oldData] = useState({
    usernameOld: user.username,
    emailOld: user.email,
    passwordOld: user.password,
    phoneOld: user.phone,
    locationOld: user.location,
  });

  const { usernameOld, emailOld, phoneOld, locationOld } = oldData;

  const [data, setData] = useState({
    username: user.username,
    email: user.email,
    password: user.password,
    phone: user.phone,
    location: user.location,
  });

  const { username, password, email, phone, location } = data;

  const handleChange = (name) => (event) => {
    console.log(user)
    setData({
      ...data,
      [name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUserInfo(data, user.token).then((data) => {
      setData({ ...data });

      //let x= signIn({username,password});

      // console.log("sigin ssssssss"+x)
    });


    logOut();
    navigate("/signin");
  };

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
                  className="userShowImg"
                  src={userIcon}
                  alt=""
                />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{usernameOld}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{usernameOld}</span>
            </div>

            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{phoneOld}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{emailOld}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{locationOld}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit Account</span>
          <form className="userUpdateForm" onSubmit={handleSubmit}>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  name="username"
                  type="text"
                  className="userUpdateInput rounded"
                  placeholder={username}
                  onChange={handleChange('username')}
                />
              </div>
              <div className="userUpdateItem">
                <label>New Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="*********"
                  className="userUpdateInput rounded"
                  onChange={handleChange('password')}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  className="userUpdateInput rounded"
                  placeholder={email}
                  onChange={handleChange('email')}
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  name="phone"
                  type="number"
                  className="userUpdateInput rounded"
                  placeholder={phone}
                  onChange={handleChange('phone')}
                />
              </div>
              <div className="userUpdateItem">
                <label>Location</label>
                <input
                  name="location"
                  type="text"
                  className="userUpdateInput rounded"
                  placeholder={location}
                  onChange={handleChange('location')}
                />
              </div>
            </div>
          
            <div className="userUpdateRight">
              <button className="userUpdateButton w-40">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}