const fs = require('fs');

fs.readdir('.', (err, files) => {
        if (err) {
                console.log("error: ", err);
                return;
        };
        // console.log(files);
        files.forEach(file => {
                console.log(file);
        })
})