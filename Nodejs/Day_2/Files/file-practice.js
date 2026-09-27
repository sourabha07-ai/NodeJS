// const { log } = require('node:console');
// const fs = require('node:fs/promises')

// //! Read File

// async function readFileContent() {
//     try{
//         const content = await fs.readFile("../data/user.json",'utf8');
//         log(content);
//     }catch(err){
//         console.error("Read File:",err.message)
//     }
// }

// readFileContent()



// //! Write file and append file

// const fs = require('node:fs/promises');

// async function writeAndAppend() {
//     await fs.writeFile('note.txt','Node.js Day_2');
//     await fs.appendFile('note.txt','\n Learning Core module');
//     console.log('File work Completely')
    
// }

// writeAndAppend().catch(console.error)


// //!  Create a folder, rename, and delete
const fs = require('node:fs/promises')

async function manageFiles() {
    await fs.mkdir('Practices',{recursive:true});
    await fs.writeFile('Practices/old.txt',"Temporary file");
    await fs.rename('Practices/old.txt','Practices/new.txt');
    await fs.unlink('Practices/new.txt')
    await fs.rmdir('Practices')
    console.log('Folder and file operations completed');
}

manageFiles().catch(console.error)