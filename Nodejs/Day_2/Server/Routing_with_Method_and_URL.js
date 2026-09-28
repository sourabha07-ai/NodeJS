const http = require('node:http');

function sendText(response,status,message){
    response.writeHead(status,{
        'Content-Type':"text/plain; charset=utf-8"
    });

    response.end(message);
}

const server = http.createServer((request,response)=>{
    if(request.method === "GET" && request.url==="/"){
        return sendText(response,200,"Home")
    }
    if(request.method === "GET" && request.url === "/about"){
        return sendText(response,200,"About Page")
    }

    return sendText(response,404,"Not Found")

});

server.listen(8000,()=>{
    console.log('Server: http://localhost:8000');
})
