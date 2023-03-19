import React, { useEffect, useState } from 'react'
import './womensStyle.css'
import { Link } from 'react-router-dom';
const WomensStyle = () => {
        const[womens,getWomens]=useState([]);
        useEffect(() => {
            getWomensClothsData();
        }, [])

        async function getWomensClothsData(){
            const streamResponse=await fetch(`https://fakestoreapi.com/products/category/women's clothing`);
            const textResponse= await streamResponse.text();
            const jsonData=JSON.parse(textResponse);
            // console.log(jsonData)
            getWomens(jsonData);
          }
          

  return (
    <div>
        <ul className='womens'>
            {
        womens.map((ele)=>{
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

export default WomensStyle