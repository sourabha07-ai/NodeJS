// import { writeFile,readFile } from "node:fs/promises";

// await writeFile("./0_FileSystem.txt","Hello Sourabh Welcome Back!");

// const read_file = await readFile('./0_FileSystem.txt',"utf8");
// console.log(read_file);


const fs = require('fs');
fs.writeFile('./0_FileSystem.txt',"Hello Sourabha!!!",(err)=>{
        if(err){
                console.error("error: ",err);
                return;
        }
        console.log("File written successfully ✅");
});



