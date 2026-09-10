import http from "node:http";

const server = http.createServer((req,res)=>{
        res.write("Welcome Back Sourabha!");
        res.end();
});

server.listen(3001,()=>{
        console.log("Server is Running...");
})