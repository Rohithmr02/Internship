const mongoose=require('mongoose');
const Schema=mongoose.Schema

const GovernmentScheme=new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    eligibility:{
        type:String,
        required:true
    },
    Application:{
        type:String,
        required:true
    }
},
{
    timestamps:true
}
)

const GovernmentModel=mongoose.model("schemes",GovernmentScheme);
module.exports=GovernmentModel;
