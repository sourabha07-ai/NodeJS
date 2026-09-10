const fs = require('fs');

fs.mkdir("mkdirFolder",(err) => {
        if (err) {
                console.log("Error: ", err);
                return;
        }
        console.log("Folder created successfully✅");
});