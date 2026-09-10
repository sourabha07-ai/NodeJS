const fs = require("fs");

fs.appendFile("./0_FileSystem.txt","\nName: Sourabha\nCourse: MCA\nCollege: ABC University",(err)=>{
        if(err){
                console.log("Error: ",err);
                return;
        }
        console.log("Content appended successfully✅");
})