import { useState } from 'react';
import '../crops/Crops.css'

function CropCard({item}){
    const[value,setvalue]=useState(false)
    const handlebutton=()=>{
      setvalue(true);
    }
    const Handlebackbutton=()=>{
        setvalue(false);
    }
    return(
        <>
        {value ? 
        <div className='CropMore-details'>
          <div className="cropdetail-heading">
         <h1>Crop Details:</h1>
        </div>  
         <div className="cropdetail-content">
            <p><b>Name : </b> {item.name}</p>
            <p><b>Description : </b> {item.description}</p>
            <p><b>Planting Instruction : </b> {item.plantinginstructions}</p>
            <p><b>Harvesting Instruction : </b> {item.harvestinginstructions}</p>
            <p><b>Category : </b> {item.category}</p>
            <p><b>Price : </b> {item.price}</p>
         </div>
         <div className="back-button">
            <button onClick={Handlebackbutton}>Close</button>
         </div>
        </div>
        
        :

        <div className="cropcard-container">
           <div className="crop-name">
             <p>Name : {item.name}</p>
            </div>  
            <div className="crop-category">
             <p>Category : {item.category}</p>
            </div>
            <div className="crop-price">
             <p>Price : {item.price}</p>
            </div>
            <div className="crop-button">
             <button onClick={handlebutton}>View Details</button>
            </div>
        </div>
        }
        
        </>
    )
}

export default CropCard;