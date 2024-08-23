import React from 'react'
import './Sidebar.css'
import homeicon from '../../assets/home (1).svg'
import subscriptionicon from '../../assets/subscriptions.svg'
import libraryicon from '../../assets/library.svg'
import musicicon from '../../assets/youtube-music.svg'
import sportsicon from '../../assets/sports.png'
import techicon from '../../assets/tech.png'
import simon from '../../assets/simon.png'
import megan from '../../assets/megan.png'
import tom from '../../assets/tom.png'
import camron from '../../assets/cameron.png'
import newsicon from '../../assets/news.png'
import jackicon from '../../assets/jack.png'
import blogsicon from '../../assets/blogs.png'
import automobileicon from '../../assets/automobiles.png'
import gamesicon from '../../assets/game_icon.png'
import entertainmenticon from '../../assets/automobiles.png'
import nastya from '../../assets/nastya.jpg'
import tseries from '../../assets/tseries.png'
import { useNavigate } from 'react-router-dom'
function Sidebar({side}) {
    const navigate=useNavigate()
  return (<>
    {side && (
      <div className="sidebar">
        <div className="shortcut-links">
            <div className="sidelinks">
                <img src={homeicon} onClick={()=>navigate('/home')}/><p>Home</p>
            </div>
            <div className="sidelinks">
                <img src={subscriptionicon} onClick={()=>navigate('/subscriptions')}/><p>Subscriptions</p>
            </div>
            <div className="sidelinks">
                <img src={libraryicon}/><p>Library</p>
            </div>
            <div className="sidelinks">
                <img src={musicicon}/><p>Music</p>
            </div>
            <div className="sidelinks">
                <img src={sportsicon}/><p>Technology</p>
            </div>
            <div className="sidelinks">
                <img src={automobileicon}/><p>AutoMobile</p>
            </div>
            <div className="sidelinks">
                <img src={entertainmenticon}/><p>Technology</p>
            </div>
            <div className="sidelinks">
                <img src={gamesicon}/><p>Games</p>
            </div>
            <div className="sidelinks">
                <img src={techicon}/><p>Sports</p>
            </div>
            <div className="sidelinks">
                <img src={newsicon}/><p>News</p>
            </div>
            <div className="sidelinks">
                <img src={blogsicon}/><p>Blogs</p>
            </div>
        </div>
        <hr/>
        <div className="subscrptions">
            <h3>Subcriptions</h3>
            <div className="sidelinks">
                <img src={simon}/><p>MrBeast</p>
            </div>
            <div className="sidelinks">
                <img src={megan}/><p>5-Minutes Craft</p>
            </div>
            <div className="sidelinks">
                <img src={tseries}/><p>T series</p>
            </div>
            <div className="sidelinks">
                <img src={camron}/><p>Nas Daily</p>
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
    </div>)}</>
  )
}

export default Sidebar