import express from 'express';

const Server = express();
Server.use(express.json());


Server.get('/',(req,res)=>{
        console.log("Hello From Get Server...");
        res.send("Get Server!")
});

Server.get('/home',(req,res)=>{
        console.log("Hello from home page...");
        res.send("Home Page🏠");
});

Server.get('/login',(req,res)=>{
        console.log("Hello from Login page...");
        res.send("Login page📂")
});
Server.get('/about',(req,res)=>{
        console.log("Hello from about page...");
        res.send("About Page📄")
});

Server.post('/createUser',(req,res)=>{
        console.log("Create a new User...");
        console.log(req.body);
        res.send( 
                {
                   "Message":`Hey ${req.body.name} Login Submit✅`
                })

});


Server.listen(3000,()=>{
        console.log("Server is Running in http://localhost:3000");
});