const mongoose=require('mongoose');
const Schema=mongoose.Schema

const Corps=new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    plantinginstructions:{
        type:String,
        
    },
    harvestinginstructions:{
        type:String,
       
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    season:{
        type:String,
        required:true
    }
},
{
    timestamps:true
}
)

const CorpModel=mongoose.model("Crops",Corps);
module.exports=CorpModel;;
