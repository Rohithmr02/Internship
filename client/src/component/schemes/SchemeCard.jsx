import { useState } from 'react';
import '../schemes/Schemes.css';
import Axios from 'axios';

function SchemeCard({item}){
    const[value,setvalue]=useState(false)
    const newStatus="Pending"
    const Handlebackbutton=()=>{
          setvalue(false)
    }
    const HandleDetailButton=()=>{
          setvalue(true)
    }
    const getlocaldata=JSON.parse(localStorage.getItem('email'))
    
    
    const HandleApplybutton=async()=>{
        await Axios.post("http://localhost:4000/schemes/applyscheme",{email:getlocaldata,schemeid:item._id})
        .then((result)=>{
            if(result.data === "scheme already applied"){
               return alert("scheme already applied");
            }else if(result.data === "Scheme Applied successfully") {
                alert("Scheme Applied successfully");
            }
        }).catch((err)=>
            console.log(err)
        )
        await Axios.put(`http://localhost:4000/schemes/${getlocaldata}/${item._id}`,{newStatus})
        .then(()=>{
            //
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
         </div>  
          <div className="cropdetail-content">
             <p><b>Name : </b> {item.name}</p>
             <p><b>Description : </b> {item.description}</p>
             <p><b>Eligibility : </b> {item.eligibility}</p>
             <p><b>Application Mode : </b> {item.Application}</p>
          </div>
          <div className="back-button">
             <button onClick={HandleApplybutton}>Apply</button>
             <button onClick={Handlebackbutton}>Close</button>
          </div>
         </div>
        
        :
        <div className="SchemeCard-container">
           <div className="Scheme-name">
             <p>Name : {item.name}</p>
            </div>  
            <div className="Scheme-eligible">
             <p>Eligible : {item.eligibility}</p>
            </div>
            <div className="Scheme-Application">
             <p>Application Mode : {item.Application}</p>
            </div>
            <div className="Scheme-button">
             <button onClick={HandleDetailButton}>View Details</button>
            </div>
        </div>
    }
        
        </>
    )
}

export default SchemeCard;