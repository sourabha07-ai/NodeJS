import express from 'express'
import dotenv from 'dotenv'
dotenv.config();

const second_Server = express();
const PORT = process.env.PORT;

second_Server.get('/',async(req,res)=>{
        await res.send("Hello Sourabha!");
        console.log("Get Server is Running...✅");

});

second_Server.get('/home',async(req,res)=>{
        await res.send("This is Home Page 🏠");
        console.log("Home page created✅");
});


second_Server.listen(PORT,()=>{
        console.log(`Second server is Running in http://localhost:${PORT}`);
})