import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar';
import Feed from '../../Components/Feed/Feed';
import Profile from '../../Components/Profile/Profile';
function Home({sidebar}) {
  return(
    <>
     <Navbar></Navbar>
     <Feed sidebar={sidebar}/>
    </>
    
  )
  
    
  
}

export default Home