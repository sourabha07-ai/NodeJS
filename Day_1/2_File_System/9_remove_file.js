const fs = require("fs");

fs.unlink("./mkdirFolder/Student.txt",(err)=>{
        if(err){
                console.log('Error: ',err);
                return;
        }
        console.log("Remove file ⭐");
})