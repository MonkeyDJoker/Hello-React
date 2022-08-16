import React, { Component } from 'react'
import { Button } from 'antd'
import 'antd/dist/antd.css'
import { NavLink } from 'react-router-dom'


export default class Demo extends Component {
    render() {
        return (
            <div>
                <NavLink to='/Count'><Button type="primary">Primary Button</Button></NavLink>

            </div>
        )
    }
}
