import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({Component}) => {
    const navigate=useNavigate()
    useEffect(() => {
      
    if(localStorage.getItem("loginsuccess") === false){
       navigate('/login');
    }
     
    })
    console.log(localStorage.getItem("loginsuccess"))
  return (
    <div>
        <Component/>
    </div>
  )
}

export default ProtectedRoute