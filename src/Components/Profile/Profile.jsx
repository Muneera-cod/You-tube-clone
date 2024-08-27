import React from 'react'
import {Avatar, Flex, MantineProvider} from '@mantine/core'
import './Profile.css'
import { IconBrandGoogleFilled ,IconUsers,IconChevronRight,
  IconLogout,IconSettings,IconHelp,IconMessageExclamation,
  IconWorld,IconLanguage,IconKeyboard,IconMoon} from '@tabler/icons-react';
import profileicon from '../../assets/profile.png'
import { Link, useNavigate } from 'react-router-dom'
function Profile({profile}) {
  const navigate=useNavigate()
  return (<>
      <MantineProvider>{profile &&
      <div className='profile'>
        <div className=".shortct-links">
            <div className="sidelinks">
                <Avatar src={profileicon} mr={10}></Avatar><p>Username</p>
                                          
            </div>
            <p className='user'>@user123</p>
            <Link to='/viewchannel' style={{textDecoration:'none'}}><p className='viewurchannel'>View your channel</p></Link>

            <div className="sidelink">
                <p ></p>
            </div>
            <div className="sidelink">
            <IconBrandGoogleFilled stroke={2}/><p>Google</p>
            </div>
            <div className="sidelink">
            <IconUsers stroke={1} /><p>Switch Account</p><Flex ml={65}><IconChevronRight stroke={1}/></Flex>
            </div>
            <div className="sidelink">
               <IconLogout stroke={1}></IconLogout><p>LogOut</p>
            </div>
            <hr/>
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
            <div className="sidelink">
            <IconSettings stroke={1} /><p>Settings</p>
            </div>
            <hr/>
            
            <div className="sidelink">
            <IconHelp stroke={1}/><p>Help</p>
            </div>
            
            <div className="sidelink">
            <IconMessageExclamation stroke={1}/><p>Send Feedback</p>
            </div>
        
        </div>
        <hr/>
       
    </div>}
    </MantineProvider>
    </>
  )
}
export default Profile