import express from "express";
import { ENV } from "./src/config/ENV.js";
import { ConnectDb } from "./src/config/connectdb.js";

ConnectDb()
const app = express()


app.listen(ENV.PORT,()=>{
    
    console.log(`server running on port ${ENV.PORT}`)
})