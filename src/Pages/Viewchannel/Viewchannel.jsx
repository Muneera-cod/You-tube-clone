import React from 'react'
import './Viewchannel.css'
import profileicon from '../../assets/profile.png'
import {Avatar, Button, Flex, MantineProvider} from '@mantine/core'
import Navbar from '../../Components/Navbar/Navbar.jsx'
function Viewchannel() {
  return (
    <>
    <MantineProvider>
    <Navbar/>
    <div className='outer-box'>
    <Flex mt={50} ml={300}><Avatar src={profileicon} radius="xl" size="xl" mt={15} ml={-20}></Avatar><div class='viewchannelp'><h1>Username</h1>
    <p>@user123</p>
    <p>More about this channel....<b style={{color:'black'}}>more</b></p>
    </div>
    </Flex>
    <Flex gap={5} ml={394} pt={10} ><Button  w={180} radius={100} bg={'lightgrey'} c={'black'}>Customise channel</Button><Button w={150} radius={100} bg={'lightgrey'} c={'black'}>Manage Video</Button></Flex>
    <Flex ml={320} mt={50} gap={30}><h4>Home</h4><h4>Community</h4></Flex>
    <div className='hrr'><hr></hr></div>
     </div>
     
    </MantineProvider>
    </>
  )
}

export default Viewchannel