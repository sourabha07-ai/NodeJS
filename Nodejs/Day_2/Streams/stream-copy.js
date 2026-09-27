const fs = require('node:fs');

const source = fs.createReadStream('../Streams/input.txt');
const destination = fs.createWriteStream('../Streams/copy_input.txt');

source.on('error',(error)=>{
     console.log("Error:",error.message);
})

destination.on('error',(error)=>{
    console.log("Error:",error.message);
})

destination.on('finsh',()=>{
    console.log("File Copied Successfully✅")
})

source.pipe(destination);