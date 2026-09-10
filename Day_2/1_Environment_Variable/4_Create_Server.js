const http = require("http");
const port =Number(process.env.PORT);

const server = http.createServer((req,res)=>{
        res.end("Welcome Back Sir!");
});

server.listen(port,()=>{
        console.log(`Server is Running...PORT: ${port}`);
});