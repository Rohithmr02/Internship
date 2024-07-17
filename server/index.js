const express=require('express');
const mongoose=require('mongoose');

const cors=require('cors');
const app=express();
const UserRouter=require('./Routes/UserRouter');
const CropsRouter=require('./Routes/CropsRouter');
const SchemeRouter=require('./Routes/SchemeRouter');
const port=4000;


app.use(express.json());
app.use(cors());


const uri = "mongodb+srv://rohithramesh2202:Rohith%40022@rohith.zwtf3ko.mongodb.net/government?retryWrites=true&w=majority&appName=Rohith";

mongoose.connect(uri)
.then(()=>{
    console.info("db connected")
}).catch((err)=>{
    console.log(err)
})



app.use('/user',UserRouter)
app.use('/crops',CropsRouter);
app.use('/schemes',SchemeRouter);

app.listen(port,()=>{
    console.log(`server is running on the port ${port}`);
})