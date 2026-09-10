const fs = require('fs');

fs.rmdir("mkdirFolder/",(err)=>{
        if(err){

                console.log("error: ",err);
                return;
        }
        console.log('Remove Folder ⭐');
});