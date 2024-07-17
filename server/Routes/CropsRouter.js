const express=require('express');
const router=express.Router();
const CorpModel=require('../Models/Crops');

router.post('/addCropdetails',async(req,res)=>{
    const{name,description,plantinginstruction,harvestinginstructions,price,category,season}=req.body
    try {
        const posted=await CorpModel.create(req.body)
        if(posted){
            res.json(posted)
        }else{
            res.json("failed")
        }
    } catch (error) {
        res.json(error);
    }
})


router.get('/cropdetails',async(req,res)=>{
    try {
        const Data=await CorpModel.find()
        if(Data){
            res.json(Data)
        }else{
            res.json("No Data");
        }
    } catch (error) {
        res.json(error);
    }
})

router.post('/individual/details',async(req,res)=>{
     const{userid}=req.body
     try {
        const founded=await CorpModel.findOne({_id:userid})
        if(founded){
            res.json(founded)
        }else{
            res.json("failed")
        }
     } catch (error) {
        res.json(error);
     }
})

router.post('/sort/cropsname',async(req,res)=>{
    const{cropname}=req.body
    try {
        const sortedcrop=await CorpModel.findOne({name:cropname})
        if(sortedcrop){
            res.send(sortedcrop)
        }else{
            res.send("no crops found");
        }
    } catch (error) {
        res.send(error);
    }
})
router.post('/sort/category',async(req,res)=>{
    const{category}=req.body
    try {
        const sortedcategory=await CorpModel.findOne({category:category})
        if(sortedcategory){
            res.send(sortedcategory)
        }else{
            res.send("no category found");
        }
    } catch (error) {
        res.send(error)
    }
})
router.post('/sort/season',async(req,res)=>{
    const{season}=req.body
    try {
        const sortedseason=await CorpModel.findOne({season:season})
        if(sortedseason){
            res.send(sortedseason)
        }else{
            res.send("no scheme found");
        }
    } catch (error) {
        res.send(error)
    }
})
module.exports=router