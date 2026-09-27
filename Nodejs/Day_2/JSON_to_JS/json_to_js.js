// const jsonText = '{"id":1,"name":"Sourabha"}';

// const user = JSON.parse(jsonText);

// user.role = "Backend Developer";

// console.log(user) // javaScript

// const output = JSON.stringify(user,null,2);
// console.log(output) // JSON format


const data = require('../data/user.json');
// console.log(data); //javascript object

const jsonOutput = JSON.stringify(data,null,2);
console.log(jsonOutput); // JSON String
 