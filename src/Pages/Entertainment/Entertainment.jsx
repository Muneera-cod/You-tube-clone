import React from 'react'
import './Entertainment.css'
import { MantineProvider ,Avatar} from '@mantine/core'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import thumbnail8 from '../../assets/5mincraftthumbnail1 (1).png'
import thumbnail9 from '../../assets/5mincraftthumbnail2 (1).png'
import thumbnail7 from '../../assets/thumbnail7 (1).jpg'
import thumbnail11 from '../../assets/thumbnail (1).png'
import thumbnail6 from '../../assets/thumbnail6 (1).jpeg'
import tseries from '../../assets/tseries.png'
import fivemincraftlogo from '../../assets/5-Minute_Crafts_logo.jpg'
import mrbeastlogo from '../../assets/mrbeastlogo.jpg'
import netflixlogo from '../../assets/netflixlogo.jpg'
import netflixthumbnail1 from '../../assets/netflixthumbnail1 (1).png'
import likenastyalogo from '../../assets/nastya.jpg'
import nasdaily from '../../assets/Nasdaily.jpeg'
import thumbnaill from '../../assets/thumbnail9 (1).png'
import thumbnail10 from '../../assets/nasdailythumbnail (1).jpg'
function Entertainment() {
  return (
    <>
    <Navbar/>
    <MantineProvider>{
       <>
      <div className='container'>
       <div className='feed'>
          
           
           <Link to={`https://youtu.be/n6GWU1soW-s?si=AI75xJI_ZTMlmu1p`} className='card' style={{textDecoration:'none'}}>
                  <img src={thumbnail8} alt='' />
                  <h2>AWESOME DRAWING & PAINTING HACKS 🖍️🎨 NEW SCHOOL YEAR, NEW ART SKILLS</h2>
                   <Avatar src={fivemincraftlogo}  size="1.5rem"></Avatar><h3>5-Minute Crafts</h3>
                    <p>10,999 views 19 hours ago</p>
           </Link>
           
           <Link to={`https://youtu.be/vnMLhiz6azo?si=19m2w_F7p5cISibU`} className='card' style={{textDecoration:'none'}}>
                  <img src={thumbnail7} alt='' />
                  <h2>Nastya and her friends are playing a mysterious challenge</h2>
                   <Avatar src={likenastyalogo}  size="1.5rem"></Avatar><h3>Like Nastya</h3>
                    <p>463M views  3 years ago</p>
           </Link>
           <Link to={`https://youtu.be/WxtJqyIyThU?si=zQdpsyjXBktb6P6T`} className='card' style={{textDecoration:'none'}}>
                  <img src={thumbnail6} alt=''/>
                  <h2>KashmirMainTuKanyakumari|Chennai Express|Shahrukh K, Deepika P,Sunidhi C,Arijit S</h2>
                  <Avatar src={tseries} size="1.5rem"></Avatar><h3>Brototype</h3>
                    <p>64M views  2 years ago</p>
           </Link>
           <Link to={`https://youtu.be/z0SBPguo-C0?si=4kekc0YRaOFM9SQH`} className='card' style={{textDecoration:'none'}}>
                  <img src={thumbnail10} alt='' />
                  <h2>The Full Story of Nas Daily</h2>
                   <Avatar src={nasdaily}  size="1.5rem"></Avatar><h3>JavaScript Mastery</h3>
                    <p>1.3M views  5 years ago</p>
           </Link>
           <Link to={`https://youtu.be/ZC5gSi9IMmE?si=0y5KsIPTGkMNeVR6`} className='card' style={{textDecoration:'none'}}>
                  <img src={thumbnail9} alt=''/>
                  <h2>CHEAP MATERIALS, GORGEOUS DECOR 🌟 DIYS YOU NEED TO TRY! 🛋️✨</h2>
                  <Avatar src={fivemincraftlogo}  size="1.5rem"></Avatar><h3>5-Minute Crafts</h3>
                    <p>42K views  7 days ago</p>
           </Link>
           <Link to={`https://youtu.be/QYcSCDiZN5c?si=w9p11B52a_ZFiyh2`} className='card' style={{textDecoration:'none'}}>
                   <img src={netflixthumbnail1} alt=''/>
                   <h2>Prithviraj & His Friends FOOLED By a Desert Mirage!| Aadujeevitham | Netflix India</h2>
                   <Avatar src={netflixlogo} size="1.5rem"></Avatar><h3>NetFlix India</h3>
                     <p>159K views  4 weeks ago</p>
            </Link>
           <Link to={`https://youtu.be/krsBRQbOPQ4?si=deHq7FrRxd54QD4u`} className='card' style={{textDecoration:'none'}}>
                  <img src={thumbnail11} alt='' />
                  <h2>$1 vs $250,000,000 Private Island!</h2>
                   <Avatar src={mrbeastlogo}  size="1.5rem"></Avatar><h3>MrBeast</h3>
                    <p>218M views  6 months ago</p>
           </Link>
         
        
          
           <Link to={`https://youtu.be/n6GWU1soW-s?si=AI75xJI_ZTMlmu1p`} className='card' style={{textDecoration:'none'}}>
                  <img src={thumbnail8} alt='' />
                  <h2>AWESOME DRAWING & PAINTING HACKS 🖍️🎨 NEW SCHOOL YEAR, NEW ART SKILLS</h2>
                   <Avatar src={fivemincraftlogo}  size="1.5rem"></Avatar><h3>5-Minute Crafts</h3>
                    <p>10,999 views 19 hours ago</p>
           </Link>
          
           <Link to={`https://youtu.be/vnMLhiz6azo?si=19m2w_F7p5cISibU`} className='card' style={{textDecoration:'none'}}>
                  <img src={thumbnail7} alt='' />
                  <h2>Nastya and her friends are playing a mysterious challenge</h2>
                   <Avatar src={likenastyalogo}  size="1.5rem"></Avatar><h3>Like Nastya</h3>
                    <p>463M views  3 years ago</p>
           </Link>
           <Link to={`https://youtu.be/HPJKxAhLw5I?si=sMzwLO7eJ6bS0gUm`} className='card' style={{textDecoration:'none'}}>
                  <img src={thumbnaill} alt='' />
                  <h2>Planting 20,000,000 Trees, My Biggest Project Ever!</h2>
                   <Avatar src={mrbeastlogo}  size="1.5rem"></Avatar><h3>MrBeast</h3>
                    <p>106M views  4 years ago</p>
           </Link>
             
           </div>
           </div>
       </>
        }</MantineProvider>
   </>
  )
}

export default Entertainment