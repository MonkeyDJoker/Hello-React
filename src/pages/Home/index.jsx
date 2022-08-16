import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            Home
            <br />
            {/* 路由链接 */}
            <NavLink to='news' >News</NavLink> <br />
            <NavLink to='message' >Message</NavLink>

            {/* 子组件显示 */}
            <Outlet/>
        </div>
    )
}
