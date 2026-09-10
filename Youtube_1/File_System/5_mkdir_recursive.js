const fs = require('fs');
fs.mkdir('College/Student/MCA',{recursive:true},(err)=>{
        if(err){
                console.log("error: ",err);
                return;
        }
        console.log('Folders created successfully✅✅');
});