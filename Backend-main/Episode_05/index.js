import express from "express";
import { ENV } from "./src/config/ENV.js";
import { ConnectDb } from "./src/config/connectdb.js";
import { notesRouter } from "./src/routes/notes.route.js";

ConnectDb()
const app = express()
app.use(express.json())
app.use('/api',notesRouter)
app.listen(ENV.PORT,()=>{
    
    console.log(`server running on port ${ENV.PORT}`)
})