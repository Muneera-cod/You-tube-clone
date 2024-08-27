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
    
    const navigate=useNavigate()
  return (<>

      <div className={`sidebar ${sidebar ?"":"small-sidebar"}`}>
        <div className="shortcut-links">
            <div className="sidelinks" onClick={()=>navigate('/home')} title='Home'>
                <img src={homeicon} /><p>Home</p>
            </div>
            <div className="sidelinks" onClick={()=>navigate('/subscriptions')} title='Subscriptions'>
                <img src={subscriptionicon}/><p >Subscriptions</p>
            </div>
            <div className="sidelinks" onClick={()=>navigate('/library')} title='Library'>
                <img src={libraryicon}/><p >Library</p>
            </div>
            <div className="sidelinks" onClick={()=>navigate('/technology')} title='Technology'>
                <img src={techicon}/><p >Technology</p>
            </div>
            <div className="sidelinks"  onClick={()=>navigate('/entertainment')} title='Entertainment'>
                <img src={entertainmenticon}/><p>Entertainment</p>
            </div>
            <div className="sidelinks" onClick={()=>navigate('/music')} title='Music'>
                <img src={musicicon}/><p>Music</p>
            </div>
            <div className="sidelinks" onClick={()=>navigate('/sports')} title='Sports'>
                <img src={sportsicon}/><p>Sports</p>
            </div>
            <div className="sidelinks" onClick={()=>navigate('/news')} title='News'>
                <img src={newsicon}/><p>News</p>
            </div>
            <div className="sidelinks" onClick={()=>navigate('/blogs')} title='Blogs'>
                <img src={blogsicon}/><p>Blogs</p>
            </div>
            <div className="sidelinks" onClick={()=>navigate('/automobiles')} title='Automobiles'>
                <img src={automobileicon}/><p>AutoMobile</p>
            </div>
            
            <div className="sidelinks" onClick={()=>navigate('/games')} title='Games'>
                <img src={gamesicon}/><p>Games</p>
            </div>
           
        </div>
        <hr/>
        <div className="subscrptions">
            <h3>Subscriptions</h3>
            <div className="sidelinks">
                <img src={mrbeastlogo}/><p>MrBeast</p>
            </div>
            <div className="sidelinks">
                <img src={fivemincraftlogo}/><p>5-Minutes Craft</p>
            </div>
            <div className="sidelinks">
                <img src={tseries}/><p>T series</p>
            </div>
            <div className="sidelinks">
                <img src={brototypelogo}/><p>Brototype</p>
            </div>
            <div className="sidelinks">
                <img src={javascriptmastery}/><p>Javascript Mastery</p>
            </div>
            <div className="sidelinks">
                <img src={nasdaily}/><p>Nas Daily</p>
            </div>
            <div className="sidelinks">
                <img src={tom}/><p>Justin Bieber</p>
            </div>
            <div className="sidelinks">
                <img src={jackicon}/><p>PewDiePie</p>
            </div>
            <div className="sidelinks">
                <img src={nastya}/><p>Like Nastya</p>
            </div>
            
        </div>
    </div></>
  )
}

export default Sidebar