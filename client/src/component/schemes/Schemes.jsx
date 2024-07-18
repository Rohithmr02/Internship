import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar'
import '../schemes/Schemes.css'
import SchemeCard from './SchemeCard';
import Axios from 'axios'


function Schemes(){
    const [data,setdata]=useState([]);
    const getdata=async()=>{
        await Axios.get('https://internship-c5up.onrender.com/schemes/schemedetails')
        .then((result)=>{
            console.log(result.data);
            setdata(result.data)
        }).catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        getdata();
    },[])
    return(
        <div className="Schemes-conatiner">
            <div className="dashboard-navbar">
                <Navbar/>
            </div>
            <div className="Schemes-content">
            <div className="dashboard-content-heading">
                   <h1>Farmer Government Aided Schemes</h1>
                   <p>Total Schemes : {data.length}</p>
                </div>
                <div className="Schemes-content-details"> 
                    {data.map((item,index)=>{
                        return(
                            <SchemeCard item={item}/>     
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


export default Schemes;
