import {sum,sub,mul,div} from "./User.js";

let num1 = 23; let num2 = 12;

console.log(`Addition of ${num1} and ${num2} number is ${sum(num1,num2)}`);
console.log(`Substraction of ${num1} and ${num2} number is ${sub(num1,num2)}`);
console.log(`Multiplication of ${num1} and ${num2} number is ${mul(num1,num2)}`);
console.log(`Division of ${num1} and ${num2} number is ${div(num1,num2).toFixed(2)}`);
 
