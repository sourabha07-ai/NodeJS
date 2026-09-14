import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const server = express();
const PORT_2 = process.env.PORT_2;

server.get('/',(req,res)=>{
        res.send("This is Home page🏠");
        console.log("get API done ✅");
});

server.use(express.json());
server.post('/createUser',(req,res)=>{
        console.log(req.body);
        res.send({
                
                "Message":`Hey ${req.body.name} is Done✅`
        })
        // console.log("POST API created✅");
});

server.listen(PORT_2,()=>{
        console.log(`Server is running in http://localhost:${PORT_2}`)
})