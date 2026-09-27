const fs = require('node:fs')

const text = fs.readFile('../data/user.json','utf8',(err,text)=>{
    if(err){
        console.log("Error:",err.message);
    }else{
        console.log(text)
    }
})

console.log("This is my print before the file content")