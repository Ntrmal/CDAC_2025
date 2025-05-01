import React from 'react'
import './settings.css'
import Sidebar from '../../../components/sidebar/Sidebar'

export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingswrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account  </span>
            <span className="settingsDeleteTitle">Delete Your Account  </span>
        </div>
        <form  className="settingsForm">
            <label>profile picture</label>
            <div className="settingsPP">
                <img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <label htmlFor='fileinput'>
                <i className="settingsPPIcon fa-regular fa-circle-user"></i> 
                 </label>
              <input type="file" id="fileInput" style={{display:"none"}}/>   
            </div>
            <label>Username</label>
            <input type="text" placeholder='nirmal' />
            <label>Email</label>
            <input type="email" placeholder='nirmal@gmail.com' />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
