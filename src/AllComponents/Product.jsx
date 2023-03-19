import React from 'react'
import './product.css'
import { Link, Outlet } from 'react-router-dom'

const Project = () => {
 
    
  return (
    <div className='project'>
        <ul className='projectul'>
            <Link to="electronic">
            <li>Electronics</li>
            </Link>
            <Link to="jewelery">
            <li>Jewelery's</li>
            </Link>
            <Link to="mensClothing">
            <li>MensClothing</li>
            </Link>
            <Link to="womensClothing">
            <li>WomensClothing</li>
            </Link> 
        </ul>
        <Outlet/>
    </div>
  )
}

export default Project