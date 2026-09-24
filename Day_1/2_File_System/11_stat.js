const fs = require('fs');

fs.stat('../2_File_System',(err,stats)=>{
        if(err){
                console.log("Error: ",err);
                return;
        }

        console.log("Size:", stats.size, "bytes");
        console.log("Is file:", stats.isFile());
        console.log("Is dir: ",stats.isDirectory());
});