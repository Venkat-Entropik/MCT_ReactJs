import React, { useContext } from 'react'
import { GlobalData } from '../App'
import './loginpage.css'

const LoginPage = () => {
const {user,setUser,pass,setPass}=useContext(GlobalData)
console.log(user)
console.log(pass)

  return (
    <div className='loginContainer'>
        <div className="leftContainer">
            <h1 className='logintitle'>Welcome back to <br/>Pretty Login</h1>
            <p className='logintext'>It's great to have you back</p>  
            <label className='loginlabel'>EMAIL</label>
            <br/>
            <input type="email" className='inp' placeholder='test@gmail.com' onChange={(e)=>{
                setUser(e.target.value)
            }}/>
            <br/>
            <label className='loginlabel'>PASSWORD</label>
            <br/>
            <input type="password" className='inp' placeholder='test123' onChange={(e)=>{
                setPass(e.target.value)
            }}/>
            <div className="but">
                <button className='buttons' onClick={()=>{
                    if(user==='test@gmail.com' && pass==='test123'){
                        localStorage.setItem("loginsuccess",true)
                        window.location.reload();
                    }
                    else{
                        alert("Wrong Credintials")
                    }
                }}>Login</button>
                <button className='buttons' onClick={()=>{
                    localStorage.setItem("loginsuccess",false)
                }}>Logout</button>
            </div>
        </div>
        <div className="rightContainer">
            <img src='https://t3.ftcdn.net/jpg/01/22/71/96/360_F_122719641_V0yw2cAOrfxsON3HeWi2Sf4iVxhv27QO.jpg' alt='login' className='loginimage'/>
        </div>
    </div>
  )
}

export default LoginPage