import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import '../Status/Status.css'
import StatusCard from './StatusCard';
import Axios from 'axios'

function Status(){
    const[Data,setData]=useState([])
    const getlocaldata=JSON.parse(localStorage.getItem('email'))
    const getdata=async()=>{
        await Axios.post('http://localhost:4000/user/userdetails',{email:getlocaldata})
        .then((result)=>{
            console.log(result.data.schemes);
            setData(result.data.schemes)
            console.log(Data.length);
        }).catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
         getdata();
    },[])
    return(
   
       
        
        <div className="Status-conatiner">
            <div className="dashboard-navbar">
                <Navbar/>
            </div>
            <div className="Status-content">
            <div className="dashboard-content-heading">
                   <h1>Farmer Government Aided Schemes</h1>
                </div>
                <div className="Status-content-details"> 
                    {Data.map((item)=>{
                        return(
                            <StatusCard item={item}/>
                        )
                    })}
                </div>
            </div>
        </div>
       

    
  
    )
}


export default Status;
