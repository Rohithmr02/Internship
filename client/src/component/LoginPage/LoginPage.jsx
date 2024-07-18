import React, { useState } from "react";
import '../LoginPage/LoginPage.css'
import { Link } from "react-router-dom";
import Axios from 'axios'
import { useNavigate } from "react-router-dom";

function LoginPage(){
    const Navigate=useNavigate();
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("");
    const handleformsubmit=async(e)=>{
           e.preventDefault();
           await Axios.post('https://internship-c5up.onrender.com/user/login',{email,password})
         .then((result)=>{
            if(result.data === "Loggedin successfully!"){
                alert("Loggedin successfully!");
                Navigate(`/dashboard/`);
                localStorage.setItem("email",JSON.stringify(email));
            }else if(result.data === "password is incorrect!"){
                alert("Password is incorrect!")
            }else if(result.data === "No record found!"){
                alert("No record found!");
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
    return(
        <div className="LoginPage-container">
            <div className="LoginPage-heading">
                <h1>Farmer Government Aided Schemes</h1>
            </div>
            <div className="LoginPage-form">
                <form onSubmit={handleformsubmit}>
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
                    <button>Login</button>
                    <p>If you don't have account <Link to='/Register'>Register</Link> <br/> or login as admin <Link to='/Adminlogin'>AdminLogin</Link> </p>
                </form>
                
            </div>
        </div>
    )
}


export default LoginPage;
