import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import '../crops/Crops.css'
import CropCard from './CropCard';
import Axios from 'axios'

function Crops(){
    // const categorys=["Food crops","Feed crops","Fiber crops","Oil crops","Ornamental crops","Industrial crops"]
    // const seasons=["winter","summer","spring","autumn"]
    const[cropname,setcropname]=useState("")
    const[data,setdata]=useState([])
    const getdata=async()=>{
       await Axios.get('https://internship-c5up.onrender.com/crops/cropdetails')
       .then((result)=>{
        setdata(result.data);
       }).catch((err)=>{
        console.log(err);
       })
    }
    useEffect(()=>{
         getdata();
    },[cropname])
    const handelformsubmit=async(e)=>{
        e.preventDefault();
          await Axios.post('http://localhost:4000/crops/sort/cropsname',{cropname})
          .then((result)=>{
            if(result.data === "no crops found"){
                alert("no crop found");
            }else{
                console.log(result.data);
                setdata([...result.data])
            }
          }).catch((err)=>{
            console.log(err);
          })

    }
    
    return(
        <div className="crops-conatiner">
            <div className="dashboard-navbar">
                <Navbar/>
            </div>
            <div className="crops-content">
            <div className="dashboard-content-heading">
                   <h1>Farmer Government Aided Schemes</h1>
                   <p>Total Crops : {data.length}</p>
                </div>
                <div className="crops-content-details"> 
                    <div className="crops-category-input">
                        <form onSubmit={handelformsubmit}>
                            <input 
                            type="text"
                            placeholder='Sort By Crop Name'
                            value={cropname}
                            onChange={(e)=>setcropname(e.target.value)}
                            required
                            />
                        </form>
                    </div>
                    {data.map((item,index)=>{
                        return(
                            <CropCard item={item}/>  
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


export default Crops;
