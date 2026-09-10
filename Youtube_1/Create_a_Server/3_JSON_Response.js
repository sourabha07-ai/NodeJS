import http from "node:http";

const server = http.createServer((req,res)=>{
        const user = {
                id:24,
                name:"Sourabha",
                city:"Bhubaneswar"
        };
        res.setHeader("Content-Type","application/json");
        res.end(JSON.stringify(user));

});

server.listen(3000,()=>{
        console.log("Server is Running...");
})