import { useEffect, useState } from 'react';
import '../Status/Status.css'

function StatusCard({item}){
    const[className,setClassName]=useState("StatusCard-container")
    useEffect(()=>{
        if(item.status === "Approved"){
            return setClassName("StatusApprove-container")
        }else if(item.status === "Declined"){
            return setClassName("StatusDeclined-container")
        }

    },[item.status])
    return(
        <div className={className}> 
            <div className="Status-name">
             <p><b>Scheme Name : </b>{item.schemeId.name}</p>
            </div>
            <div className="Status-price">
             <p><b>Status :</b> {item.status}</p>
            </div>
        </div>
    )
}

export default StatusCard;
