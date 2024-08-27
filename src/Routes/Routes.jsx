import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home.jsx"
import Subscriptions from "../Pages/Subscriptions/Subscriptions.jsx";
import Feed from "../Components/Feed/Feed.jsx";
import Listview from "../Pages/ListViewSubscription/Listview.jsx"
import Library from "../Pages/Library/Library.jsx";
import Technology from "../Pages/Technology/Technology.jsx";
import Entertainment from "../Pages/Entertainment/Entertainment.jsx";
import Music from "../Pages/Music/Music.jsx";
import Sports from "../Pages/Sports/Sports.jsx";
import Blogs from "../Pages/Blogs/Blogs.jsx"
import News from "../Pages/News/News.jsx"
import Automobile from '../Pages/Automobile/Automobile.jsx'
import Games from '../Pages/Games/Games.jsx'
import Viewchannel from "../Pages/Viewchannel/Viewchannel.jsx";
export const router=createBrowserRouter(
    [
        {
            path:'/',
            element:<><Navbar/><Feed/></>
        },
        {
            path:'/home',
            element:<Home/>
        },
        {
          path:'/subscriptions',
          element:<Subscriptions/>
        },
        {
            path:'/list',
            element:<Listview/>
        },
        {
            path:'/library',
            element:<Library/>
        },
        {
            path:'/technology',
            element:<Technology/>
        },
        {
            path:'/entertainment',
            element:<Entertainment/>
        },
        {
            path:'/music',
            element:<Music/>
        },
        {
            path:'/sports',
            element:<Sports/>
        },
        {
            path:'/news',
            element:<News/>
        },
        {
            path:'/blogs',
            element:<Blogs/>
        },
        {
            path:'/automobiles',
            element:<Automobile/>
        },
        {
            path:'/games',
            element:<Games/>
        },
        {
            path:'/viewchannel',
            element:<Viewchannel/>
        }

    ]
)