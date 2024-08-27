import React from 'react'
import './Technology.css'
import Navbar from '../../Components/Navbar/Navbar'
import javascriptmasterythumbnail from '../../assets/javascriptmastery2.jpg'
import javascriptmasterythumbnail2 from '../../assets/thumbnailjavasriptmastery (1).png'
import javascriptmastery from '../../assets/javascriptmastery.png'
import yestechmedialogo from '../../assets/yestechmedia.jpg'
import thumbnail4 from '../../assets/yestechmediathumbnail1.png'
import thumbnail5 from '../../assets/yestechmediathumbnail2 (1).png'
import brocodethumbnail1 from '../../assets/brocdethumbnail (1).png'
import brocodelogo from '../../assets/brocode.jpg'
import thumbnail3 from '../../assets/thumbnailtwo.jpg'
import apnacollagelogo from '../../assets/apnacollagelogo.jpg'
import thumbnail14 from '../../assets/apnacollagethumbnail2 (1).png'
import thumbnail1 from '../../assets/apnacollagethumbnail1 (1).png'
import brototypelogo from '../../assets/brototypelogo.webp'
import thumbnail2 from '../../assets/thumbnailbrototype (1).jpg'
import moshlogo from '../../assets/moshlogo.jpeg'
import moshthumbnail1 from '../../assets/moshthumbnail (1).png'
import moshthumbnail2 from '../../assets/moshthumbnail1 (1).png'
import freecodecamplogo from '../../assets/freecodecamplogo.jpeg'
import freecodecampthumbnail1 from '../../assets/freecodecampthumbnail1 (1).jpg'
import freecodecampthumbnail2 from '../../assets/freecodecampthumbnail2 (1).png'
import thumbnail13 from '../../assets/videofromspacethumbnail (1).png'
import videofromspacelogo from '../../assets/videofromspace.jpeg'
import asmrscriptinglogo from '../../assets/asmrscriptinglogo.jpg'
import thumbnail6 from '../../assets/asmrscriptingthumbnail (1).png'
import { MantineProvider,Flex, Card ,Text,Avatar} from '@mantine/core';
import {Link} from 'react-router-dom'
function Technology() {
  return (
    <>
    <Navbar/>
    <MantineProvider>{
      <>
     <div className='container'>
      <div className='feed'>
         
          <Link to={`https://youtu.be/B91wc5dCEBA?si=MFk09rDL9JkTQ9qZ`} className='card' style={{textDecoration:'none'}}>
                   <img src={javascriptmasterythumbnail2} alt=''/>
                   <h2>Build and Deploy a Fully Responsive Website with Modern UI/UX in React JS with Tailwind</h2>
                   <Avatar src={javascriptmastery} size="1.5rem"></Avatar><h3>Brototype</h3>
                     <p>408K views  5 months ago</p>
            </Link>
          <Link to={`https://youtu.be/RbxHZwFtRT4?si=HPieAIUnvOyZ0HX2`} className='card' style={{textDecoration:'none'}}>
                   <img src={javascriptmasterythumbnail} alt=''/>
                   <h2>Build and Deploy 3 Modern UI/UX Websites and Get Hired as a Frontend Developer | Full 10-Hour Course</h2>
                    <Avatar src={javascriptmastery}  size="1.5rem"></Avatar><h3>JavaScript Mastery</h3>
                     <p>269,611 views  14 Jun 2024</p>
            </Link>
          <Link to={`https://youtu.be/XKHEtdqhLK8?si=arRyQwftE9zgVF-P`} className='card' style={{textDecoration:'none'}}>
                 <img src={brocodethumbnail1} alt=''/>
                 <h2>Python Full Course for free 🐍</h2>
                 <Avatar src={brocodelogo} size="1.5rem"></Avatar><h3>Bro code</h3>
                   <p>19M views  3 years ago </p>
          </Link>
          <Link to={`https://youtu.be/o1HYsdwvFEI?si=s2kAswcU46Y_AsIW`} className='card' style={{textDecoration:'none'}}>
                   <img src={thumbnail3} alt=''/>
                   <h2>Part 3 | HTML Cont. | Web Designing Malayalam Tutorial</h2>
                   <Avatar src={brototypelogo} size="1.5rem"></Avatar><h3>Brototype</h3>
                     <p>269,611 views  14 Jun 2024</p>
            </Link>
          <Link to={`https://youtu.be/d56mG7DezGs?si=5RrnCYM63TQ51LPH`} className='card' style={{textDecoration:'none'}}>
                 <img src={moshthumbnail1} alt=''/>
                 <h2>TypeScript Tutorial for Beginners</h2>
                 <Avatar src={moshlogo} size="1.5rem"></Avatar><h3>Programming with Mosh</h3>
                   <p>1.2M views  2 years ago</p>
          </Link>
          <Link to={`https://youtu.be/RGOj5yH7evk?si=MZ2CRqSYXQsoCklI`} className='card' style={{textDecoration:'none'}}>
                 <img src={freecodecampthumbnail1} alt=''/>
                 <h2>Git and GitHub for Beginners - Crash Course</h2>
                 <Avatar src={freecodecamplogo} size="1.5rem"></Avatar><h3>freeCodeCamp.org</h3>
                   <p>4.1M views.4 years ago</p>
          </Link>
          <Link to={`https://youtu.be/3mjwtu4_0uk?si=8LOA_gqAIoqKbfiY`} className='card' style={{textDecoration:'none'}}>
                 <img src={thumbnail5} alt=''/>
                 <h2>JavaScript Malayalam Tutorial | Yes Tech Media |</h2>
                 <Avatar src={yestechmedialogo}  size="1.5rem"></Avatar><h3>Yes Tech Media</h3>
                   <p>131K views  3 years ago</p>
          </Link>
          <Link to={`https://www.youtube.com/watch?v=Zb1zVeXLUf8&t=3569s`} className='card' style={{textDecoration:'none'}}>
                 <img src={thumbnail4} alt=''/>
                 <h2>Bootstrap 5 Malayalam Tutorial | Yes Tech Media |</h2>
                  <Avatar src={yestechmedialogo}  size="1.5rem"></Avatar><h3>Yes Tech Media</h3>
                   <p>51K views  3 years ago</p>
          </Link>
          <Link to={`https://youtu.be/z0n1aQ3IxWI?si=axUAPxhr1nOepE-B`} className='card' style={{textDecoration:'none'}}>
                 <img src={thumbnail1} alt=''/>
                 <h2>What is Web Development ? Complete RoadMap from Basics to Advanced | 2023</h2>
                 <Avatar src={apnacollagelogo} size="1.5rem"></Avatar><h3>Apna Collage</h3>
                   <p>1.8M views  10 months ago</p>
          </Link>
          
          <Link to={`https://youtu.be/_tmVdXsI_tE?si=-NRIPjc7hVoe3slc`} className='card' style={{textDecoration:'none'}}>
                 <img src={thumbnail2} alt=''/>
                 <h2>Part 12 - QuerySet API | Python Django Tutorial | Brototype Tutorials Malayalam</h2>
                 <Avatar src={brototypelogo} size="1.5rem"></Avatar><h3>Brototype</h3>
                   <p>4.9K views  9 months ago</p>
          </Link>
          <Link to={`https://youtu.be/XkM_04Ch76E?si=FKzdYfOGbqApqdGP`} className='card' style={{textDecoration:'none'}}>
                 <img src={thumbnail13} alt=''/>
                 <h2>ISS Tour: Kitchen, Bedrooms & The Latrine</h2>
                 <Avatar src={videofromspacelogo} size="1.5rem"></Avatar><h3>VideoFromSpace</h3>
                   <p>10M views  11 years ago</p>
          </Link>
        
          <Link to={`https://youtu.be/cTBFVBuZPDA?si=yu7WrodpZ1QF3U4M`} className='card' style={{textDecoration:'none'}}>
                 <img src={thumbnail6} alt=''/>
                 <h2>Responsive Flexbox CSS | Tutorial for beginners | CSS Tutorial | Asmr Programming</h2>
                 <Avatar src={asmrscriptinglogo} size="1.5rem"></Avatar><h3>Asmr Scripting</h3>
                   <p>199 views  2 weeks ago </p>
          </Link>
          <Link to={`https://youtu.be/GxmfcnU3feo?si=nl3panwSJaa3h9kU`} className='card' style={{textDecoration:'none'}}>
                 <img src={moshthumbnail2} alt=''/>
                 <h2>The Complete Web Development Roadmap [2024]</h2>
                 <Avatar src={moshlogo} size="1.5rem"></Avatar><h3>Programming with Mosh</h3>
                   <p>102K views  1 month ago</p>
          </Link>
         
          <Link to={`https://youtu.be/pQN-pnXPaVg?si=D3tJ9DVRiCtr_94z`} className='card' style={{textDecoration:'none'}}>
                 <img src={freecodecampthumbnail2} alt=''/>
                 <h2>Git and GitHub for Beginners - Crash Course</h2>
                 <Avatar src={freecodecamplogo} size="1.5rem"></Avatar><h3>freeCodeCamp.org</h3>
                   <p>4.1M views.4 years ago</p>
          </Link>
          
          
          <Link to={`https://youtu.be/MkcfB7S4fq0?si=-RnXb-vcMyOIsR8z`} className='card' style={{textDecoration:'none'}}>
                 <img src={thumbnail14} alt=''/>
                 <h2>How to Start Web Development? Complete Roadmap for FullStack Developer | 2022</h2>
                 <Avatar src={apnacollagelogo} size="1.5rem"></Avatar><h3>Apna Collage</h3>
                   <p>3.5M views  2 years ago</p>
          </Link>
          <Link to={`https://youtu.be/pQN-pnXPaVg?si=D3tJ9DVRiCtr_94z`} className='card' style={{textDecoration:'none'}}>
                   <img src={freecodecampthumbnail2} alt=''/>
                   <h2>Git and GitHub for Beginners - Crash Course</h2>
                   <Avatar src={freecodecamplogo} size="1.5rem"></Avatar><h3>freeCodeCamp.org</h3>
                     <p>4.1M views.4 years ago</p>
            </Link>
            
          </div>
          </div>
      </>
       }</MantineProvider>
       </>
  )
}

export default Technology