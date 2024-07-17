import { useState } from 'react';
import '../ApproveRequest/Approve.css'
import Axios from 'axios';

function ApproveCard({item}){
    const[value,setvalue]=useState(false);
    const handleschembutton=()=>{
        setvalue(true);
    }
    const Handlebackbutton=()=>{
        setvalue(false);
    }
    const HandleApproveButton=async(id)=>{
         var newStatus="Approved"
         await Axios.put(`http://localhost:4000/schemes/${item.email}/${id}`,{newStatus})
         .then(()=>{
            alert("It's Approved")
         }).catch((err)=>{
            console.log(err);
         })
    }
    const HandleDeclineButton=async(id)=>{
         var newStatus="Declined"
         await Axios.put(`http://localhost:4000/schemes/${item.email}/${id}`,{newStatus})
         .then(()=>{
            alert("It's Declined");
         }).catch((err)=>{
            console.log(err);
         })
    }
    const handleDeletebutton=async(id)=>{
         await Axios.delete(`http://localhost:4000/user/delete/${id}`)
         .then((result)=>{
            if(result.data === "deleted"){
                alert("Want to Deleted User?");
            }else if(result.data === "Not Deleted"){
                alert("User Not Deleted")
            }
         }).catch((err)=>{
            console.log(err);
         })
    }
    return(
        <>
        {value ?
         <div className='CropMore-details'>
         <div className="cropdetail-heading">
        <h1>Scheme Details:</h1>
        <button onClick={Handlebackbutton}>Close</button>
       </div>  
        <div className="Approvedetail-content">
           <table>
            <tr>
                <th>Scheme Name</th>
                <th>Approve</th>
                <th>Decline</th>
            </tr>
             {item.schemes.map((item)=>{
                return(
                    <tr>
                        <td><p>{item.schemeId.name}</p></td>
                        <td><button onClick={()=>HandleApproveButton(item.schemeId._id)}>Approve</button></td>
                        <td><button onClick={()=>HandleDeclineButton(item.schemeId._id)}>Decline</button></td>
                    </tr>
                )
             })}
           </table>
        </div>
       </div>
      
        
    
    :


        <div className="ApproveCard-container">
           <div className="Approve-User">
             <p><b>User Name : </b>{item.username}</p>
            </div>  
            <div className="Approve-schemename">
             <p><b>Email : </b>{item.email}</p>
            </div>
            <div className="Approve-price">
             <p><b>Mobile Number : </b>{item.mobilenumber}</p>
            </div>
            <div className="Approve-button"> 
             <button onClick={handleschembutton}>Scheme Details</button>
             <button onClick={()=>handleDeletebutton(item._id)}>Delete</button>
            </div>
        </div>
    }
        
        </>
    )
}

export default ApproveCard;