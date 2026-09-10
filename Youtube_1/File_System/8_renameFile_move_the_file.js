const fs = require("fs");

fs.rename("00_Students.txt","./mkdirFolder/Student.txt",(err)=>{
        if(err){
                console.log("Error: ",err);
                return;
        }
        console.log("Move File successfully✅");
})