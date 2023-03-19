import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './jewlery.css'
const Jewlery = () => {
  const[jewlery,getJewlery]=useState([]);
  useEffect(() => {
    getJewleryData();
  }, [])

  async function getJewleryData(){
    const streamResponse=await fetch(`https://fakestoreapi.com/products/category/jewelery`);
    const textResponse= await streamResponse.text();
    const jsonData=JSON.parse(textResponse);
    // console.log(jsonData)
      getJewlery(jsonData);
  }
    
  
  return (
    <div>
        <ul className='jewleryul'>
        {
        jewlery.map((ele)=>{
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

export default Jewlery