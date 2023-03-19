import React, { createContext, useEffect, useState } from 'react'
import Home from './AllComponents/Home'
import {Routes, Route} from "react-router-dom";
import Navbar from './AllComponents/Navbar';
import Project from './AllComponents/Product';
import ProductDetails from './AllComponents/ProductDetails';
import Electronics from './AllComponents/Electonics';
import Jewlery from './AllComponents/Jewlery';
import MensClothing from './AllComponents/MensClothing';
import WomensStyle from './AllComponents/WomensStyle';
import UserDetails from './AllComponents/UserDetails';
import ContactPage from './AllComponents/ContactPage';
export const GlobalData=createContext()
const App = () => {

  const[passdata,setpassdata]=useState([]);
  useEffect(() => {
      getUserData();
  },[])

  async function getUserData(){
      const streamResponse=await fetch(`https://randomuser.me/api/?results=20`);
      const textResponse= await streamResponse.text();
      const jsonData=JSON.parse(textResponse);
      setpassdata(jsonData)
     
  }


  return (
    <GlobalData.Provider value={{passdata,setpassdata}}>
      <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={<Project/>}>
          <Route path='' element={<Electronics/>}/>
          <Route path='electronic' element={<Electronics/>}/>
          <Route path='jewelery' element={<Jewlery/>}/>
          <Route path='mensClothing' element={<MensClothing/>}/>
          <Route path='womensClothing'element={<WomensStyle/>} />
        </Route>
        <Route path='/productdetails/:name' element={<ProductDetails/>}/>
        <Route path='/users' element={<UserDetails/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </div>


    </GlobalData.Provider>
  )
}

export default App