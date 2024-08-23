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
import Sidebar from '../Sidebar/Sidebar'

const Navbar=()=> {
  const [sidebar,setSidebar]=useState(true);
  const handleSidebar=()=>{
     setSidebar(!sidebar)
  }
  return (
    <>
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
          <button className='button-voicesearch'><img src={voicesearchicon} className='voice-searchicon'/></button>
        </div>  
        <div className='nav-right flex-div'>
            <img src={uploadicon} alt=""/>
            <img src={notificationicon} alt=""/>
            <img src={profileicon} alt="" className='profileicon' />
        </div>
    </nav>
    <Sidebar side={sidebar}/>
    </>
  )
}

export default Navbar