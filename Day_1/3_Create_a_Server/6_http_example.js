import http from "node:http";
import fs from "node:fs"

const server = http.createServer((req,res)=>{
        if(req.url ==="/index.html"){
                fs.readFile('./index.html',(err,data)=>{
                        if(err){
                                res.statusCode = 404;
                                res.end("Page Not Found!!!");
                                return;
                        }
                        res.setHeader("Content-type","text/html");
                        res.end(data);

                });
        }else if(req.url === "/user"){
                const user  = {
                        id:1,
                        name:"Sourabha",
                        Role:"Backend Developer"
                };
           res.setHeader("Content-Type","application/json");
           res.end(JSON.stringify(user));
        }
        else{
                res.statusCode = 404;
                res.end("Page Not Found!!!");
        }

});

server.listen(3000,()=>{
        console.log("Server is Running...");
})