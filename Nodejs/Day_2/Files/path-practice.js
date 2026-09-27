const path = require("node:path")

const filePath = path.join(__dirname,'data','user.json');

console.log('File path name:',filePath)
console.log("File name:",path.basename(filePath))
console.log('Folder:',path.dirname(filePath));
console.log('Extension:',path.extname(filePath))
console.log('Absolute Path:',path.resolve(filePath))