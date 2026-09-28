const http = require('node:http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/plain; charset=utf-8'
    });
    res.end("Hello World");
});

server.listen(8000,()=>{
     console.log('Server: http://localhost:8000');
})