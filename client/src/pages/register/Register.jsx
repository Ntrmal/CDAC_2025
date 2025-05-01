import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
      <form  className="registerForm">
        <label>Username</label>
        <input type='text' className='registerInput'placeholder=' enter your username..'></input>
        <label>Email</label>
        <input type='text' className='registerInput'placeholder=' enter your email..'></input>
        
        <label>Password</label>
        <input type='password' className='registerInput' placeholder=' enter your password..'></input>
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className='link' to='/login'>Login</Link></button>
    </div>
  )
}
