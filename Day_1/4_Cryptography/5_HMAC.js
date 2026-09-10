const crypto = require('crypto');

const hmac = crypto
    .createHmac('sha256', 'secret-key')
    .update('Hello')
    .digest('hex');

console.log(hmac);