import React from 'react'
import {Outlet} from 'react-router-dom'
import Switch from '@mui/material/Switch'

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Navbar = () => {
    return (
        <div>
        <switch {...label} defaultChecked />
        <Switch {...label} />
        <Outlet/>
        </div>
    )
}

export default Navbar