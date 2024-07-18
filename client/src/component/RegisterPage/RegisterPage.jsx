import React, { useState } from "react";
import '../RegisterPage/RegisterPage.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Axios from 'axios'

function RegisterPage(){
    const Navigate=useNavigate();
    const[username,setusername]=useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[mobilenumber,setmobilenumber]=useState("");
    


    const handelFormSubmit=async(e)=>{
        e.preventDefault();
        await Axios.post('https://internship-c5up.onrender.com/user/register',{username,email,password,mobilenumber})
        .then((result)=>{
            if(result.data === "Registeration successfull!"){
                alert("Registeration successfull!");
                Navigate('/');
            }else if(result.data === "User already registered!"){
                alert("Email Already Registered!")
            }
        }).catch((error)=>{
            console.log(error);
        })
    }
    return(
        <div className="RegisterPage-container">
            <div className="RegisterPage-heading">
                <h1>Farmer Government Aided Schemes</h1>
            </div>
            <div className="RegisterPage-form">
                <form onSubmit={handelFormSubmit}>
                    <input 
                    type="text"
                    placeholder="Enter Your Name"
                    value={username}
                    onChange={(e)=>setusername(e.target.value)}
                    required
                    />
                    <input 
                    type="email"
                    placeholder="Enter Your Email-Id"
                    value={email}
                    onChange={(e)=>setemail(e.target.value)}
                    required
                    />
                    <input 
                    type="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e)=>setpassword(e.target.value)}
                    required
                    />
                    <input
                    type="number"
                    placeholder="Enter Your Mobile Number"
                    value={mobilenumber}
                    onChange={(e)=>setmobilenumber(e.target.value)}
                    required
                    />
                    <button>Register</button>
                    <p>If you already have account <Link to='/'>Login</Link> </p>
                </form>
                
            </div>
        </div>
    )
}


export default RegisterPage;
