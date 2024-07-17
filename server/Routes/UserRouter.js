const express=require('express')
const router=express.Router();
const UserModel=require('../Models/User');
const bcrypt=require('bcrypt');

router.post('/register',async(req,res)=>{
    const {username,email,password,mobilenumber}=req.body;
    try {
         const HashedPassword=await bcrypt.hash(password,10);
         const emailvalidate=await UserModel.findOne({email:email})
         if(!emailvalidate){
            const posted=await UserModel.create({
                username:username,
                email:email,
                password:HashedPassword,
                mobilenumber:mobilenumber,
            })
            if(posted){
                res.json("Registeration successfull!")
            }else{
                res.json("Enter correct credential!")
            }
        }else{
            res.json("User already registered!");
        }



    } catch (error) {
        res.json(error);
    }
})

router.post('/login',async(req,res)=>{
    const{email,password}=req.body
    try {

        const emailexist= await UserModel.findOne({email:email})
        if(emailexist){
            const passwordvalidate= await bcrypt.compare(password,emailexist.password);
            if(passwordvalidate){
                res.json("Loggedin successfully!")
            }else{
                res.json("password is incorrect!");
            }
        }else{
            res.json("No record found!");
        }
    } catch (error) {
         res.json(error)
    }

})

router.post('/userdetails',async(req,res)=>{
      const {email}=req.body;
      try {
        
        const user = await UserModel.findOne({ email }).populate('schemes.schemeId');
        if (!user) {
            return res.status(404).send('User not found');
        }

        res.send(user);
      } catch (error) {
        res.json(error);
      }
})

router.get('/all/userdetails',async(req,res)=>{
    try {
        const founded=await UserModel.find().populate('schemes.schemeId');
        if(founded){
            res.json(founded);
        }else{
            res.json("failed")
        }
    } catch (error) {
        res.json(error)
    }
})

router.delete('/delete/:id',async(req,res)=>{
    const{id}=req.params
    try {
         const deleted=await UserModel.findByIdAndDelete({_id:id})
         if(deleted){
            res.send("deleted")
         }else{
            res.send("Not Deleted")
         }
    } catch (error) {
          res.send(error);
    }
})

module.exports=router;