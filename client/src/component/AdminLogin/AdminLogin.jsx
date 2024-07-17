import React, { useState } from "react";
import '../AdminLogin/AdminLogin.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function AdminLogin(){
    const Navigate=useNavigate()
    const[username,setusername]=useState("")
    const[password,setpassword]=useState("");
   
    const handleformsubmit=(e)=>{
        e.preventDefault();
        if(username === "Rohith" && password=== "123"){
            alert("LoggedIn Successfully");
            Navigate('/AdminDashboard');
        }else{
            alert("Enter correct details");
        }
    }
    return(
        <div className="AdminLogin-container">
            <div className="AdminLogin-heading">
                <h1>Farmer Government Aided Schemes</h1>
            </div>
            <div className="AdminLogin-form">
                <form onSubmit={handleformsubmit}>
                    <input 
                    type="text"
                    placeholder="Enter Your Username"
                    value={username}
                    onChange={(e)=>setusername(e.target.value)}
                    required
                    />
                    <input 
                    type="password"
                    placeholder="Enter Your SecretKey"
                    value={password}
                    onChange={(e)=>setpassword(e.target.value)}
                    required
                    />
                    <button>Login</button>
                    <p>If you user login <Link to='/'>Login as user</Link> </p>
                </form>
                
            </div>
        </div>
    )
}


export default AdminLogin;