import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home.jsx"
import Subscriptions from "../Pages/Subscriptions/Subscriptions.jsx";

export const router=createBrowserRouter(
    [
        {
            path:'/',
            element:<Navbar/>
        },
        {
            path:'/home',
            element:<Home/>
        },
        {
          path:'/subscriptions',
          element:<Subscriptions/>
        }

    ]
)