import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"
import { ENV } from "./src/config/ENV.js";
import { ConnectDb } from "./src/config/connectdb.js";
import { userRouter } from "./src/routes/user.route.js";

ConnectDb()
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use('/api',userRouter)
app.listen(ENV.PORT,()=>{
    
    console.log(`server running on port ${ENV.PORT}`)
    
})