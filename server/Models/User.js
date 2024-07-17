const mongoose=require('mongoose');
const Schema=mongoose.Schema

const User=new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
        },
        mobilenumber:{
            type:Number,
            required:true,
            unique:true
        },
        schemes: [
            {
                schemeId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'schemes'
                },
                status: {
                    type: String,
                    required: true
                }
            }
        ]
        
    },
    {
        timestamps:true
    }
)

const UserModel=mongoose.model('user',User);
module.exports=UserModel;