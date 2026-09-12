import express from "express";
import { ENV } from "./src/config/ENV.js";

const app =express()



app.get('/',(req,res)=>{
    return res.send("hello")
})

app.get('/users', (req, res) => {
    res.json({ 
        users: [
            { id: 1, name: 'Rahul' },
            { id: 2, name: 'Priya' }
        ]
    })
})

app.listen(ENV.PORT,()=>{
    console.log(`server running on port ${ENV.PORT}`)
})