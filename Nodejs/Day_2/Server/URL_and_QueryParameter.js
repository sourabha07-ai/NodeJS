const http = require('node:http');

const server = http.createServer((req,res)=>{
    const  requestURL = new URL(req.url,`http://${req.headers.host}`);
    const name = requestURL.searchParams.get('name');


   res.writeHead(200,{
    'Content-Type':"application/json; charset=utf-8"
   });

   res.end(JSON.stringify({
    pathname:requestURL.pathname,name
   }))
})

server.listen(8000,()=>{
    console.log('http://localhost:8000/')
})