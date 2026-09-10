const fs = require('fs'); 

// old file : 0_FileSystem.txt
fs.rename('0_SourabhaFileSystem.txt',"0_FileSystem.txt",(err)=>{
        if(err){
                console.log("error: ",err);
                return;
        }

        console.log('File rename successfully✅');
})