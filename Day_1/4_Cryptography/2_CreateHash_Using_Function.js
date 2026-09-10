const crypto = require("node:crypto");

const hash = (data) => {
        return crypto
                .createHash('sha256')
                .update(data)
                .digest('hex');

};

console.log(hash("Hello Sourabha!"));
console.log(hash("Hello Puja!"));