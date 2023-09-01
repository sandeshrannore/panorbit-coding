import React from 'react'
import './LoginPage.css'
import Wave from '../../assets/wave.png'
import LoginList from '../../components/loginList/LoginList'

const LoginPage = () => {
  return (
    <div className='loginMain'>
      <img src={Wave} className='wave'/>
      <LoginList/>
    </div>
  )
}

export default LoginPage