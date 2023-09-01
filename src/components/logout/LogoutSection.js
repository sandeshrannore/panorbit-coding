import React, { useState } from 'react'
import './LogoutSection.css'
import { Link } from 'react-router-dom'

const LogoutSection = ({show, setShow, data}) => {


    const handleClick = () => {
        setShow(false); 
      };
  return (
    <div
      className='LogoutDiv'
      style={{ alignItems:'center', display: show ? "flex" : "none" }}
    >
      <div className='profile'>
        <img src={data?.profilepicture} alt="profile" />
        <p>{data?.name}</p>
        <p>{data?.email}</p>
      </div>
      <hr />
      {/* -------(LogOut)------ */}
      <Link to="/">
        <button onClick={handleClick} className='signout_button'>
          Sign out
        </button>
      </Link>
    </div>
  )
}

export default LogoutSection