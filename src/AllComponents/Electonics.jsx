import React, { useEffect, useState } from 'react'
import './electronics.css'
import { Link } from 'react-router-dom'
const Electronics = () => {
  useEffect(() => {
    getElectronicData();
  }, [])

  const[electronic,setElectronic]=useState([]);
  async function getElectronicData(){
    const streamResponse=await fetch(`https://fakestoreapi.com/products/category/electronics`);
    const textResponse= await streamResponse.text();
    const jsonData=JSON.parse(textResponse);
    // console.log(jsonData)
    setElectronic(jsonData);
  }
  
  return (
    <div>
       <ul className='electronicsul'>
      {
        electronic.map((ele)=>{
            return(
             <Link to={`/productdetails/${ele.id}`}>
              <li>{ele.title}</li>
              </Link>
            )
        })
      }
      </ul>
    </div>
  )
}

export default Electronics