import React from 'react'
import './Sidebar.css'
import homeicon from '../../assets/home (1).svg'
import subscriptionicon from '../../assets/subscriptions.svg'
import libraryicon from '../../assets/library.svg'
import musicicon from '../../assets/youtube-music.svg'
import sportsicon from '../../assets/sports.png'
import techicon from '../../assets/tech.png'
import mrbeastlogo from '../../assets/mrbeastlogo.jpg'
import fivemincraftlogo from '../../assets/5-Minute_Crafts_logo.jpg'
import tom from '../../assets/tom.png'
import nasdaily from '../../assets/Nasdaily.jpeg'
import newsicon from '../../assets/news.png'
import jackicon from '../../assets/jack.png'
import blogsicon from '../../assets/blogs.png'
import automobileicon from '../../assets/automobiles.png'
import gamesicon from '../../assets/game_icon.png'
import entertainmenticon from '../../assets/entertainment.png'
import nastya from '../../assets/nastya.jpg'
import javascriptmastery from '../../assets/javascriptmastery.png'
import brototypelogo from '../../assets/brototypelogo.webp'
import tseries from '../../assets/tseries.png'
import { useNavigate } from 'react-router-dom'
function Sidebar({sidebar}) {
    const sidebardata=[
    {
       name:'Home',
       icon:homeicon,
       link:'/home'
    },{
        name:'Subscriptions',
        icon:subscriptionicon,
        link:'/subscriptions'
    },
    {
        name:'Library',
        icon:libraryicon,
        link:'/library'
    },
    {
        name:'Technology',
        icon:techicon,
        link:'/technology'
    },
    {
        name:'Entertainment',
        icon:entertainmenticon,
        link:'/entertainment'
    },
    {
        name:'Music',
        icon:musicicon,
        link:'/music'
    },
    {
        name:'Sports',
        icon:sportsicon,
        link:'/sports'
    },
    {
        name:'News',
        icon:newsicon,
        link:'/news'
    },
    {
        name:'Blogs',
        icon:blogsicon,
        link:'/blogs'
    },
    {
        name:'Automobiles',
        icon:automobileicon,
        link:'/automobiles'
    },
    {
        name:'Games',
        icon:gamesicon,
        link:'/games'
    }
    
]
const sidebarsubscriptiondata=[
    {
       logo:mrbeastlogo,
       channelname:'MrBeast'
    },
    {
        logo:fivemincraftlogo,
        channelname:'5-Minutes Craft'
     },
     {
        logo:tseries,
        channelname:'T series'
     },
     {
        logo:brototypelogo,
        channelname:'Brototype'
     },
     {
        logo:javascriptmastery,
        channelname:'Javascript Mastery'
     },
     {
        logo:nasdaily,
        channelname:'Nas Daily'
     },
     {
        logo:tom,
        channelname:'Justin Bieber'
     },
     {
        logo:jackicon,
        channelname:'PewDiePie'
     },
     {
        logo:nastya,
        channelname:'Like Nastya'
     }
]
    const navigate=useNavigate()
  return (<>

      <div className={`sidebar ${sidebar ?"":"small-sidebar"}`}>
       
        <div className="shortcut-links">
        
            {sidebardata.map((item)=>{
                return(
                <div className="sidelinks" onClick={()=>navigate(item.link)} title='Home'>
                <img src={item.icon} /><p>{item.name}</p>
            </div>)
             
        })}  
         <hr/>
        </div>
        
        <div className="subscrptions">
            <h3>Subscriptions</h3>
        {sidebarsubscriptiondata.map((item)=>{
            return(
             <div className="sidelinks">
                <img src={item.logo}/><p>{item.channelname}</p>
              </div>
            )
        })} 
        </div>
    </div></>
  )
}

export default Sidebar