import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './mensclothing.css'
const MensClothing = () => {
    const[mens,setMens]=useState([]);
    useEffect(() => {
        getMensClothingData()
    }, [])
    

    async function getMensClothingData(){
        const streamResponse=await fetch(`https://fakestoreapi.com/products/category/men's clothing`);
        const textResponse= await streamResponse.text();
        const jsonData=JSON.parse(textResponse);
        // console.log(jsonData)
        setMens(jsonData);
      }

  return (
    <div>
        <ul className='mensul'>
            {
               mens.map((ele)=>{
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

export default MensClothing