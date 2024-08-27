import React, { useState } from 'react'
import './Navbar.css'
import menuicon from '../../assets/hamburger-menu.svg'
import logo from '../../assets/youtube-logo (1).svg'
import searchicon from '../../assets/search.svg'
import uploadicon from '../../assets/upload.svg'
import moreicon from '../../assets/more.png'
import notificationicon from '../../assets/notifications.svg'
import profileicon from '../../assets/profile.png'
import voicesearchicon from '../../assets/voice-search-icon.svg'
import Sidebar from '../Sidebar/Sidebar.jsx'
import Profile from '../Profile/Profile.jsx'
import { MantineProvider } from '@mantine/core'

const Navbar=()=> {
  const [sidebar,setSidebar]=useState(true);
  const handleSidebar=()=>{
     setSidebar(!sidebar)
  }
  const [profile,setProfile]=useState(false);
  const handleProfile=()=>{
      setProfile(!profile)
      console.log('sssssd')
  }
  return (
  

    <>
    <MantineProvider>
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
          <img src={menuicon} className='menu-icon' onClick={handleSidebar}></img>
          <img src={logo} className='logo'></img>
        </div>
        <div className='nav-middle flex-div'>
          <div className="search-div flex-div">
            <input type='text' placeholder='search'/>
            <img src={searchicon} className='searchicon'/>
          </div>
          <button className='button-voicesearch' title='Search your voice'><img src={voicesearchicon} className='voice-searchicon'/></button>
        </div>  
        <div className='nav-right flex-div'>
            <img src={uploadicon} alt="" className='uploadicon' title='Create'/>
            <img src={notificationicon} alt="" className='notificationicon' title='Notifications'/>
            <img src={profileicon} alt="" className='profileicon' title='Profile' onClick={handleProfile}/>
            {/* <img src={searchicon} className='searchicon'/> */}
        </div>
    </nav>
    
    <Sidebar sidebar={sidebar}/>
    <Profile profile={profile}/>
    </MantineProvider>
    </>
  
  )
}

export default Navbar
