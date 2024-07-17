const express=require('express')
const router=express.Router();
const mongoose = require('mongoose');
const GovernmentModel=require('../Models/GovernmentSchemes');
const { ObjectId } = require('mongoose').Types;
const UserModel=require('../Models/User');

router.post('/addschemes',async(req,res)=>{
    const{name,description,eligibility,Application}=req.body
    try {
        const posted=await GovernmentModel.create(req.body)
        if(posted){
            res.json(posted)
        }else{
            res.json("failed")
        }
    } catch (error) {
        res.json(error);
    }
})

router.get('/schemedetails',async(req,res)=>{
    try {
        const founded=await GovernmentModel.find()
        if(founded){
            res.json(founded)
        }else{
            res.json("no data");
        }
    } catch (error) {
        console.log(error);
    }
})

router.post('/applyscheme',async(req,res)=>{
    const{email,schemeid}=req.body
    try {
        const userdetails=await UserModel.findOne({email:email})
        if(userdetails.schemes.length !==0){
            for(var i=0;i<userdetails.schemes.length;i++){
                if(userdetails.schemes[i].schemeId.toString() === schemeid){
                   return res.json("scheme already applied");
                   
                }
            }
            }
    
            const founded=await GovernmentModel.findOne({_id:schemeid})
            let objId=new mongoose.Types.ObjectId(founded._id)
            await UserModel.updateOne({
                email:email
            },
            {
                $push:{
                    schemes:{
                        schemeId:objId,
                        status:"Not applied"
                    }
                }
            },
            {
                upsert:false,
                new:true
            }
            )
    
            res.send('Scheme Applied successfully')
    } catch (error) {
        res.json(error)
    }
})

router.put('/:email/:schemeId', async (req, res) => {
    try {
        const { email, schemeId } = req.params;
        const { newStatus } = req.body;
        const user = await UserModel.findOne({email})

        if (!user) {
            return res.status(404).send('User not found');
        }
        const scheme = user.schemes.find(scheme => scheme.schemeId.toString() === schemeId);

        if (!scheme) {
            return res.status(404).send('Scheme not found for the user');
        }
        scheme.status = newStatus;
        await user.save();
        
        res.status(200).send(scheme);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports=router