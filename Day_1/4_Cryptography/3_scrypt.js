const crypto =  require("node:crypto");

crypto.scrypt("Sourabha Jena","randomSalt",64,(err,derivedKey)=>{
        if(err) throw err;
        console.log(derivedKey.toString('hex'));
});

const random = crypto.randomBytes(16).toString('hex');
console.log(random);