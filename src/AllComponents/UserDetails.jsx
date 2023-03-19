
import { useContext, useState } from 'react'
import './userDetails.css'
import { GlobalData } from '../App'
const UserDetails = () => {
const {passdata} =useContext(GlobalData)

    const[all,setAll]=useState(false);
    const[male,setMale]=useState(false);
    const[female,setFemale]=useState(false);

  return (
    <div className='useDetailsContainer'>
        <h1 className='userDetailstitle'>User Details</h1>
        <p className='useDetailsDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sunt facilis dolorum rerum sed laboriosam quibusdam inventore obcaecati ex fugit. Placeat culpa doloribus ad repudiandae eligendi amet nobis laborum reprehenderit accusamus quaerat id consectetur saepe assumenda distinctio maiores quibusdam atque, voluptates nemo ex illum numquam sequi? Libero quo optio, esse, recusandae consequuntur eum eos a sunt aperiam maiores id officia.</p>
        <div className="radiobuttons">
            <input type="checkbox" className='radio' onChange={()=>{
                setAll(!all);
               
            }}/>
            <label>ALL</label>
            <input type="checkbox" className='radio' onChange={()=>{
                setMale(!male);
                setFemale(false)
            }}/>
            <label>Male</label>
            <input type="checkbox" className='radio' onChange={()=>{
                setFemale(!female);
                setMale(false)
            }}/>
            <label>Female</label>
        </div>
        <table>
            <tr className='header'>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
            </tr>

            {

              ((female) ? passdata.results.filter((ele)=>{
                    return ele.gender==='female';
                }):(male) ? passdata.results.filter((ele)=>{
                    return ele.gender==='male';
                }) :passdata.results.filter((ele)=>{
                    return ele;
                })).map((ele)=>{


                    return(
                        <tr className='content'>
            <td><img src={ele.picture.medium} alt='user' className='userimage'/></td>
            
             <td>{ele.name.first}</td>
             <td>{ele.email}</td>
            <td>{ele.gender}</td>
             </tr>
                    )
                })

             
            }
          
        </table>
    </div>
  )
}

export default UserDetails