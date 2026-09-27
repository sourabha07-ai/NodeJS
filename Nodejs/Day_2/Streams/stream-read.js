// const fs = require('node:fs');


// //! create ReadStream
// const readable = fs.createReadStream('../Streams/input.txt',{
//     encoding:'utf8',
//     highWaterMark:50
// });

// readable.on('data',(chunk)=>{
//     console.log("Chunk",chunk);
// });

// readable.on('end',()=>{
//     console.log("Read Completed");
// });

// readable.on('error',(error)=>{
//     console.error("Error:",error.message)
// });


// //! Create WriteStream

const fs = require('node:fs')

const writable = fs.createWriteStream('../Streams/input.txt');

writable.write('first line\n');
writable.write('Second Line\n');
writable.end('Endline\n');

writable.on('finish',()=>{
    console.log("Writing Complete");
})