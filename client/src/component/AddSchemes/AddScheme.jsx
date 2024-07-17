import Navbar from '../Navbar/Navbar';
import '../AddSchemes/AddScheme.css'
import AdminNav from '../AdminNav/AdminNav';
import { useState } from 'react';
import Axios from 'axios'


function AddScheme(){
    const[name,setname]=useState("")
    const[description,setdescription]=useState("")
    const[eligibility,seteligibility]=useState("");
    const[Application,setApplication]=useState("")


    const Handleformsubmit=async(e)=>{
        e.preventDefault();
        await Axios.post('http://localhost:4000/schemes/addschemes',{name,description,eligibility,Application})
        .then(()=>{
            alert("success");
        }).catch((err)=>{
            console.log(err);
        })
    }



    return(
        <div className="AddScheme-conatiner">
            <div className="dashboard-navbar">
                <AdminNav/>
            </div>
            <div className="AddScheme-content">
            <div className="dashboard-content-heading">
                   <h1>Farmer Government Aided Schemes</h1>
                </div>
                <div className="AddScheme-content-details"> 
                <form onSubmit={Handleformsubmit}>
                       <input 
                       type="text"
                       placeholder='Enter Name Of Scheme'
                       value={name}
                       onChange={(e)=>setname(e.target.value)}
                       required
                       /> 
                       <textarea
                        type="text"
                        placeholder='Enter Scheme Description'
                        rows="4" cols="50"
                        value={description}
                        onChange={(e)=>setdescription(e.target.value)}
                        required
                       />
                       <input 
                       type='text'
                       placeholder='Enter Eligibility'
                       value={eligibility}
                       onChange={(e)=>seteligibility(e.target.value)}
                       />
                       <input 
                       type="text"
                       placeholder='Enter Application Process'
                       value={Application}
                       onChange={(e)=>setApplication(e.target.value)}
                       required
                       /> 
                       <button>Add</button>
                    </form>     
                </div>
            </div>
        </div>
    )
}


export default AddScheme;