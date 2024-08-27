import React from 'react'
import { MantineProvider } from '@mantine/core'
import styles from './Listview.module.css'
import { Flex,Text ,List,ListItem ,Center,Avatar} from '@mantine/core'
import {Link} from 'react-router-dom'
import javascriptmastery from '../../assets/javascriptmastery.png'
import brototypelogo from '../../assets/brototypelogo.webp'
import { IconGridDots,IconList  } from '@tabler/icons-react';
import thumbnail3 from '../../assets/thumbnailtwo.jpg'
import javascriptmasterythumbnail from '../../assets/javascriptmastery2.jpg'
import javascriptmasterythumbnail2 from '../../assets/thumbnailjavasriptmastery (1).png'
import tseries from '../../assets/tseries.png'
import thumbnail12 from '../../assets/thumbnailbrototype (1).jpg'
import likenastyalogo from '../../assets/nastya.jpg'
import thumbnail10 from '../../assets/nasdailythumbnail (1).jpg'
import fivemincraftlogo from '../../assets/5-Minute_Crafts_logo.jpg'
import mrbeastlogo from '../../assets/mrbeastlogo.jpg'
import thumbnail11 from '../../assets/thumbnail (1).png'
import thumbnail8 from '../../assets/5mincraftthumbnail1 (1).png'
import thumbnail9 from '../../assets/5mincraftthumbnail2 (1).png'
import thumbnail7 from '../../assets/thumbnail7 (1).jpg'
import nasdaily from '../../assets/Nasdaily.jpeg'
import thumbnaill from '../../assets/thumbnail9 (1).png'
import thumbnail6 from '../../assets/thumbnail6 (1).jpeg'
import Navbar from '../../Components/Navbar/Navbar'
function Listview() {
  return (
    <>
    <Navbar/>
    <MantineProvider>{
       <>
       <Flex mt={20}><Text ml={280} fw={700} size="lg">Latest</Text> <Text ml={1000} c={'blue'} mr={10}>Manage</Text>
       <Link to={'/subscriptions'}><IconGridDots/></Link>
       <Link to={'/list'}><IconList style={{width:'50px'}}/></Link>
       </Flex>
       <Center><List size='xl' listStyleType='none' mt={12} withPadding ml={150}>
       <Flex  mih={50} direction="column" wrap="wrap">
         <ListItem p={30}>
         <Link to={`https://youtu.be/RbxHZwFtRT4?si=HPieAIUnvOyZ0HX2`} className={styles.card} style={{textDecoration:'none'}}>
                   <img src={javascriptmasterythumbnail} alt='' className={styles.imgg}/>
                   <h2>Build and Deploy 3 Modern UI/UX Websites and Get Hired as a Frontend Developer | Full 10-Hour Course</h2>
                    <Avatar src={javascriptmastery}  size="1.5rem"></Avatar><h3>JavaScript Mastery</h3>
                     <p>269,611 views  14 Jun 2024</p>
            </Link>
          </ListItem>
        <ListItem p={30}>
        <Link to={`https://youtu.be/o1HYsdwvFEI?si=s2kAswcU46Y_AsIW`} className={styles.card} style={{textDecoration:'none'}}>
                   <img src={thumbnail3} alt=''  className={styles.imgg}/>
                   <h2>Part 3 | HTML Cont. | Web Designing Malayalam Tutorial</h2>
                   <Avatar src={brototypelogo} size="1.5rem"></Avatar><h3>Brototype</h3>
                     <p>269,611 views  14 Jun 2024</p>
            </Link>
         </ListItem>
         <ListItem p={30}>
         <Link to={`https://youtu.be/n6GWU1soW-s?si=AI75xJI_ZTMlmu1p`}  className={styles.card} style={{textDecoration:'none'}}>
                   <img src={thumbnail8} alt='' className={styles.imgg} />
                   <h2>AWESOME DRAWING & PAINTING HACKS 🖍️🎨 NEW SCHOOL YEAR, NEW ART SKILLS</h2>
                    <Avatar src={fivemincraftlogo}  size="1.5rem"></Avatar><h3>5-Minute Crafts</h3>
                     <p>10,999 views 19 hours ago</p>
            </Link>
         </ListItem> 
         <ListItem p={30}>
         <Link to={`https://youtu.be/B91wc5dCEBA?si=MFk09rDL9JkTQ9qZ`} className={styles.card} style={{textDecoration:'none'}}>
                   <img src={javascriptmasterythumbnail2} alt='' className={styles.imgg}/>
                   <h2>Build and Deploy a Fully Responsive Website with Modern UI/UX in React JS with Tailwind</h2>
                   <Avatar src={javascriptmastery} size="1.5rem"></Avatar><h3>Brototype</h3>
                     <p>408K views  5 months ago</p>
            </Link>
        </ListItem>
        <ListItem p={30}>
        <Link to={`https://youtu.be/vnMLhiz6azo?si=19m2w_F7p5cISibU`} className={styles.card} style={{textDecoration:'none'}}>
                   <img src={thumbnail7} alt=''   className={styles.imgg}/>
                   <h2>Nastya and her friends are playing a mysterious challenge</h2>
                    <Avatar src={likenastyalogo}  size="1.5rem"></Avatar><h3>Like Nastya</h3>
                     <p>463M views  3 years ago</p>
            </Link>
       </ListItem>
        <ListItem p={30}>
        <Link to={`https://youtu.be/WxtJqyIyThU?si=zQdpsyjXBktb6P6T`} className={styles.card} style={{textDecoration:'none'}}>
                   <img src={thumbnail6} alt='' className={styles.imgg}/>
                   <h2>KashmirMainTuKanyakumari|Chennai Express|Shahrukh K, Deepika P,Sunidhi C,Arijit S</h2>
                   <Avatar src={tseries} size="1.5rem"></Avatar><h3>Brototype</h3>
                     <p>64M views  2 years ago</p>
            </Link>
      </ListItem> 
      <ListItem p={30}>
      <Link to={`https://youtu.be/z0SBPguo-C0?si=4kekc0YRaOFM9SQH`} className={styles.card} style={{textDecoration:'none'}}>
                   <img src={thumbnail10} alt='' className={styles.imgg}/>
                   <h2>The Full Story of Nas Daily</h2>
                    <Avatar src={nasdaily}  size="1.5rem"></Avatar><h3>JavaScript Mastery</h3>
                     <p>1.3M views  5 years ago</p>
            </Link>
      </ListItem> 
      <ListItem p={30}>
      <Link to={`https://youtu.be/ZC5gSi9IMmE?si=0y5KsIPTGkMNeVR6`} className={styles.card}  style={{textDecoration:'none'}}>
                   <img src={thumbnail9} alt='' className={styles.imgg}/>
                   <h2>CHEAP MATERIALS, GORGEOUS DECOR 🌟 DIYS YOU NEED TO TRY! 🛋️✨</h2>
                   <Avatar src={fivemincraftlogo}  size="1.5rem"></Avatar><h3>5-Minute Crafts</h3>
                     <p>42K views  7 days ago</p>
            </Link>
      </ListItem> 
      <ListItem p={30}>
      <Link to={`https://youtu.be/krsBRQbOPQ4?si=deHq7FrRxd54QD4u`} className={styles.card}  style={{textDecoration:'none'}}>
                   <img src={thumbnail11} alt='' className={styles.imgg}/>
                   <h2>$1 vs $250,000,000 Private Island!</h2>
                    <Avatar src={mrbeastlogo}  size="1.5rem"></Avatar><h3>MrBeast</h3>
                     <p>218M views  6 months ago</p>
            </Link>
      </ListItem>
       <ListItem p={30}>
       <Link to={`https://youtu.be/_tmVdXsI_tE?si=-NRIPjc7hVoe3slc`} className={styles.card}  style={{textDecoration:'none'}}>
                   <img src={thumbnail12} alt='' className={styles.imgg}/>
                   <h2>Part 12 - QuerySet API | Python Django Tutorial | Brototype Tutorials Malayalam</h2>
                   <Avatar src={brototypelogo} size="1.5rem"></Avatar><h3>Brototype</h3>
                     <p>4.9K views  9 months ago</p>
            </Link>
      </ListItem> 
      <ListItem p={30}>
         <Link to={`https://youtu.be/RbxHZwFtRT4?si=HPieAIUnvOyZ0HX2`} className={styles.card} style={{textDecoration:'none'}}>
                   <img src={javascriptmasterythumbnail} alt='' className={styles.imgg}/>
                   <h2>Build and Deploy 3 Modern UI/UX Websites and Get Hired as a Frontend Developer | Full 10-Hour Course</h2>
                    <Avatar src={javascriptmastery}  size="1.5rem"></Avatar><h3>JavaScript Mastery</h3>
                     <p>269,611 views  14 Jun 2024</p>
            </Link>
          </ListItem>
        <ListItem p={30}>
        <Link to={`https://youtu.be/o1HYsdwvFEI?si=s2kAswcU46Y_AsIW`} className={styles.card} style={{textDecoration:'none'}}>
                   <img src={thumbnail3} alt=''  className={styles.imgg}/>
                   <h2>Part 3 | HTML Cont. | Web Designing Malayalam Tutorial</h2>
                   <Avatar src={brototypelogo} size="1.5rem"></Avatar><h3>Brototype</h3>
                     <p>269,611 views  14 Jun 2024</p>
            </Link>
         </ListItem>
         <ListItem p={30}>
         <Link to={`https://youtu.be/n6GWU1soW-s?si=AI75xJI_ZTMlmu1p`}  className={styles.card} style={{textDecoration:'none'}}>
                   <img src={thumbnail8} alt='' className={styles.imgg} />
                   <h2>AWESOME DRAWING & PAINTING HACKS 🖍️🎨 NEW SCHOOL YEAR, NEW ART SKILLS</h2>
                    <Avatar src={fivemincraftlogo}  size="1.5rem"></Avatar><h3>5-Minute Crafts</h3>
                     <p>10,999 views 19 hours ago</p>
            </Link>
         </ListItem> 
         <ListItem p={30}>
         <Link to={`https://youtu.be/B91wc5dCEBA?si=MFk09rDL9JkTQ9qZ`} className={styles.card} style={{textDecoration:'none'}}>
                   <img src={javascriptmasterythumbnail2} alt='' className={styles.imgg}/>
                   <h2>Build and Deploy a Fully Responsive Website with Modern UI/UX in React JS with Tailwind</h2>
                   <Avatar src={javascriptmastery} size="1.5rem"></Avatar><h3>Brototype</h3>
                     <p>408K views  5 months ago</p>
            </Link>
        </ListItem>
        <ListItem p={30}>
        <Link to={`https://youtu.be/vnMLhiz6azo?si=19m2w_F7p5cISibU`} className={styles.card} style={{textDecoration:'none'}}>
                   <img src={thumbnail7} alt='' className={styles.imgg}/>
                   <h2>Nastya and her friends are playing a mysterious challenge</h2>
                    <Avatar src={likenastyalogo}  size="1.5rem"></Avatar><h3>Like Nastya</h3>
                     <p>463M views  3 years ago</p>
            </Link>
       </ListItem>
       <ListItem p={30}>
      <Link to={`https://youtu.be/HPJKxAhLw5I?si=sMzwLO7eJ6bS0gUm`} className={styles.card} style={{textDecoration:'none'}}>
                   <img src={thumbnaill} alt='' className={styles.imgg}/>
                   <h2>Planting 20,000,000 Trees, My Biggest Project Ever!</h2>
                    <Avatar src={mrbeastlogo}  size="1.5rem"></Avatar><h3>MrBeast</h3>
                     <p>106M views  4 years ago</p>
            </Link>
            </ListItem> 
         
      </Flex>
       </List></Center>
       
  </>
}</MantineProvider>
     </>
     )
}

export default Listview