// import { readFile } from "node:fs/promises";
// const data = await readFile("./0_FileSystem.txt",'utf8');
// console.log(data);


const fs = require("fs");
fs.readFile('./0_FileSystem.txt',"utf8",(err,data)=>{
        if(err){
                console.log("Error: ",err);
                return;
        }
        
        console.log(data);
});

