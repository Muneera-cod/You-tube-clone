import React from 'react'
import {Avatar, Flex, MantineProvider} from '@mantine/core'
import './Profile.css'
import { IconBrandGoogleFilled ,IconUsers,IconChevronRight,
  IconLogout,IconSettings,IconHelp,IconMessageExclamation,
  IconWorld,IconLanguage,IconKeyboard,IconMoon} from '@tabler/icons-react';
import profileicon from '../../assets/profile.png'
import { Link, useNavigate } from 'react-router-dom'
function Profile({profile}) {
  
  return (<>
      <MantineProvider>{profile &&
      <div className='outer'>
      <div className='profile'>
        <div className="shortct-links">
          <div >
            <div className="profiletop">
                <div className='profilephoto'>
                  <Avatar src={profileicon}></Avatar>
                  <div className='profileleftside'>
                  <p>Username</p>
                  <p>@user123</p>
                  <Link to='/viewchannel' style={{textDecoration:'none'}}><p>View your channel</p></Link>     
                  </div>                
                </div>                    
            </div>
           
            </div>
{/* ---------------------------------------------------------------------------------------------------------------------------------------------- */}
            
           <Flex direction={'column'} justify={'center'}><div className="sidelink">
            <IconBrandGoogleFilled stroke={2}/><p>Google</p>
            </div>
            <div className="sidelink">
            <IconUsers stroke={1} /><p>Switch Account</p><Flex ml={65}><IconChevronRight stroke={1}/></Flex>
            </div>
            <div className="sidelink">
               <IconLogout stroke={1}></IconLogout><p>LogOut</p>
            </div>
            <hr/>
            </Flex>


            <Flex direction={'column'} justify={'center'}>
            <div className="sidelink">
            <IconWorld stroke={1}/><p>Location: India</p>
            </div>
            <div className="sidelink">
            <IconLanguage stroke={1}/><p>Language: British India</p>
            </div>
            <div className="sidelink">
            <IconKeyboard stroke={1} /><p>Keyboard shortcuts</p>
            </div>
            <div className="sidelink">
               <IconMoon stroke={1} /><p>Appearance: Device theme</p>
            </div>
            <hr/>
            </Flex>

            <Flex direction={'column'} justify={'center'} >
            <div className="sidelink">
            <IconSettings stroke={1} /><p>Settings</p>
            </div>
            <hr/>
            </Flex>
            
            <Flex direction={'column'} justify={'center'}>
            <div className="sidelink">
            <IconHelp stroke={1}/><p>Help</p>
            </div>
             <div className="sidelink">
            <IconMessageExclamation stroke={1}/><p>Send Feedback</p>
            </div>
            </Flex>
        </div>
        <hr/>
       
    </div>
    </div>}
    </MantineProvider>
    </>
  )
}
export default Profile