import crypto  from "node:crypto";

const hash = crypto.createHash('sha256').update("Sourabha Jena").digest('hex');

const hash2  = crypto.createHash('sha256');

hash2.update("Puja Maity");
hash2.update("Love");
hash2.update("Sourabha");


const hex_value = hash2.digest('base64');


console.log(hash);
console.log(hex_value);