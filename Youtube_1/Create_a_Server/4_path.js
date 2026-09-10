import path  from "node:path";

const file_path = "d:/Nodejs2026/Youtube_1/Create_a_Server/4_path.js";

console.log(path.basename(file_path)); //4_path.js
console.log(path.dirname(file_path)); //d:/Nodejs2026/Youtube_1/Create_a_Server
console.log(path.extname(file_path));  //.js
console.log(path.resolve(file_path));  //d:\Nodejs2026\Youtube_1\Create_a_Server\4_path.js


