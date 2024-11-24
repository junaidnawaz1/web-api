import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className=' bg-slate-600  p-4'>
        <ul className='flex gap-4'>
            <li className='text-white'>
                <NavLink to="/">Home</NavLink>
                </li>
            <li className='text-white'>
                <NavLink to="/single-prod">Product</NavLink>
                </li>
                <li className='text-white'>
                <NavLink to="/cart">Cart</NavLink>
                </li>
        </ul>
    </div>
  )
}

export default Navbar