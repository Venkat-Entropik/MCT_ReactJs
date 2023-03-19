import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <ul className='navbar'>
            <Link to="home">
            <li>Home</li>
            </Link>
            <Link to="products">
            <li>Products</li>
            </Link>
            <Link to="users">
            <li>Users</li>
            </Link>
            <Link to="contact">
            <li>Contact</li>
            </Link>
        </ul>
    </div>
  )
}

export default Navbar