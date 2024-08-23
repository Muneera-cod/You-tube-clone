import React from 'react'
import './Home.css'
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import Navbar from '../../Components/Navbar/Navbar'
function Home() {
  return <MantineProvider>{
    <>
    <Navbar/>
    <div className='divv'><h1 className="font-bold">Home</h1></div>
    
    </>
    }</MantineProvider>
  
    
  
}

export default Home