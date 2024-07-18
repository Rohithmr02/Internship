import '../ApproveRequest/Approve.css'
import AdminNav from '../AdminNav/AdminNav';
import ApproveCard from './ApproveCard';
import Axios from 'axios';
import { useEffect, useState } from 'react';


function Approve({setApprovedCount,setDeclinedCount}){
    const[data,setdata]=useState([]);
    const getdata=async()=>{
        await Axios.get('https://internship-c5up.onrender.com/user/all/userdetails')
        .then((result)=>{
            console.log(result.data);
            setdata(result.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
       getdata();
    },[])
    return(
        <div className="Approve-conatiner">
            <div className="dashboard-navbar">
                <AdminNav/>
            </div>
            <div className="Approve-content">
            <div className="dashboard-content-heading">
                   <h1>Farmer Government Aided Schemes</h1>
                </div>
                <div className="Approve-content-details"> 
                    {data.map((item)=>{
                        return(
                            <ApproveCard item={item}  />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


export default Approve;
