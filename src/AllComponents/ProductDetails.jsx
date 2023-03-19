import React, { useEffect, useState } from 'react'
import './projectdetails.css'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {name}=useParams();
    // const[data1,setData]=useState("");
   
 const[productdetails,getProductdetails]=useState({});
   useEffect(() => {
    
    async function getProductDetailsData(){
        const streamResponse=await fetch(`https://fakestoreapi.com/products/${name}`);
        const textResponse= await streamResponse.text();
        const jsonData=JSON.parse(textResponse);
        console.log(jsonData)
        getProductdetails(jsonData)
        // setData(jsonData);
        // console.log(data1)
    }
    getProductDetailsData();
   }, [name])
   


    
  return (
    <div className='productDetails'>
        <div className='main'>
            <div className='topContainer'>
                <h1>{productdetails.category} Category</h1>
            </div>
            <div className='bottomContainer'>
                <div className="leftContainer1">
                    <img src={productdetails.image} alt='productimage' className='productimage' />
                </div>
                <div className="rightContainer">
                    <h3>Product Name</h3>
                    <p>{productdetails.title}</p>
                    <h3>Product Price</h3>
                    <p>$ {productdetails.price}</p>
                    <h3>Product Description</h3> 
                    <p>{productdetails.description}</p>
                    <h3>Product Rating</h3>
                    <p>{productdetails.rate}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails