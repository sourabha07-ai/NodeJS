import express from 'express'
import dotenv from 'dotenv'
dotenv.config();

const second_Server = express();
const PORT = process.env.PORT;

second_Server.get('/',async(req,res)=>{
        res.send("Hello Sourabha!");
        console.log("Get Server is Running...✅");

});


second_Server.listen(PORT,()=>{
        console.log(`Second server is Running in http;//localhost:${PORT}`);
})