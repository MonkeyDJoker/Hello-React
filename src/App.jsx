import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import rootRouter from './routes'


export default function App() {
    
    const element = useRoutes(rootRouter)


    return (
        
        <div>
            <br />
            {/* 路由链接 */}
            <NavLink to='/home' >Home</NavLink> <br />
            <NavLink to='/about' >About</NavLink> <br/>
            <NavLink to='/signup' >Login</NavLink>

            {element}

            
        </div>
    )
}
