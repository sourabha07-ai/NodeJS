const fs = require('node:fs')

const text = fs.readFileSync('../data/user.json','utf8');
console.log(text);

//  //! Runs after the file is read
console.log('Runs after the file is read');