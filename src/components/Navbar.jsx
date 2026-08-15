import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-4 place-content-evenly'>
        <NavLink to="/">
           Home
        </NavLink>

        <NavLink to="/clips">
           Clips
        </NavLink>
    </div>
  )
}

export default Navbar

