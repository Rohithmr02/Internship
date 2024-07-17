import Navbar from '../Navbar/Navbar';
import '../AddCrops/AddCrops.css'
import AdminNav from '../AdminNav/AdminNav';
import { useState } from 'react';
import Axios from 'axios';


function AddCrops(){
    const seasons=["winter","summer","spring","autumn"];
    const typeofcrop=["Food crops","Feed crops","Fiber crops","Oil crops","Ornamental crops","Industrial crops"]
    const [name,setname]=useState("")
    const [season,setseason]=useState("")
    const [description,setdescription]=useState("")
    const [plantinginstructions,setplantinginstruction]=useState("")
    const [harvestinginstructions,setharvestinginstructions]=useState("")
    const [price,setprice]=useState("")
    const [category,setcategory]=useState("")

    const handleformsubmit=async(e)=>{
        e.preventDefault();
        await Axios.post('http://localhost:4000/crops/addCropdetails',{name,description,plantinginstructions,harvestinginstructions,price,category,season})
        .then((result)=>{
            console.log(result.data);
            alert("success!");
        }).catch((err)=>{
            console.log(err);
        })
    }
    
    return(
        <div className="AddCrops-conatiner">
            <div className="dashboard-navbar">
                <AdminNav/>
            </div>
            <div className="AddCrops-content">
            <div className="dashboard-content-heading">
                   <h1>Farmer Government Aided Schemes</h1>
                </div>
                <div className="AddCrops-content-details"> 
                    <form onSubmit={handleformsubmit}>
                        <div className="form-div">
                        <input 
                         type="text"
                         placeholder='Enter Name Of Crop'
                         value={name}
                         onChange={(e)=>setname(e.target.value)}
                         required
                       /> 
                        <select 
                        value={season}
                        onChange={(e)=>setseason(e.target.value)}
                        required
                        >
                           {seasons.map((item)=>{
                             return <option value={item}>{item}</option>
                           })} 
                        </select>
                        </div>
                        <div className="form-div">
                       <textarea
                        type="text"
                        placeholder='Enter Crop Description'
                        rows="4" cols="50"
                        value={description}
                        onChange={(e)=>setdescription(e.target.value)}
                        required
                       />
                       <textarea
                        type="text"
                        placeholder='Enter Crop plantinginstructions'
                        rows="4" cols="50"
                        value={plantinginstructions}
                        onChange={(e)=>setplantinginstruction(e.target.value)}
                        required
                       />
                       </div>
                       <div className="form-div">
                       <textarea
                        type="text"
                        placeholder='Enter Crop harvestinginstructions'
                        rows="4" cols="50"
                        value={harvestinginstructions}
                        onChange={(e)=>setharvestinginstructions(e.target.value)}
                        required
                       />
                       <input 
                       type="number"
                       placeholder='Enter Price Of Crop'
                       value={price}
                       onChange={(e)=>setprice(e.target.value)}
                       required
                       /> 
                       </div>
                       <div className="form-div">
                       <select 
                       value={category}
                       onChange={(e)=>setcategory(e.target.value)}
                       required
                       >
                           {typeofcrop.map((item)=>{
                             return <option value={item}>{item}</option>
                           })} 
                        </select>
                       <button>Add</button>
                       </div>
                    </form>   
                </div>
            </div>
        </div>
    )
}


export default AddCrops;