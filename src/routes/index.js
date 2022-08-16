import React from "react";
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/Home/News";
import Message from "../pages/Home/Message";
import { Navigate } from "react-router-dom";
import Count from "../pages/Count";
import SignUp from "../pages/Login"

const rootRouter = [
    {
		path:'/about',
		element:<About/>
	},
    {
        path:'/count',
        element:<Count/>
    },
    {
        path:'/signup',
        element:<SignUp/>
    },
	{
		path:'/home',
		element:<Home/>,
        children:[
          {
            path:'news',
            element: <News/>
          },
          {
            path:'message',
            element: <Message/>
          }

        ]
	},
	{
		path:'/',
		element:<Navigate to="/about"/>
	}
]

export default rootRouter