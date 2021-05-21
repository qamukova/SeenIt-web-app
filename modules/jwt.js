const jwt = require('jsonwebtoken');
const secret = '123987';

function createToken(data){
    return new Promise((resolve, reject) => {
        jwt.sign(data, secret, { expiresIn: '24h' }, (err, token) => {
            if (err) { reject(err); return; }
            resolve(token);
        });
    });
}
function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, data) => {
            if (err) { reject(err); return; }
            resolve(data);
        });
    });
}

module.exports = { createToken, verifyToken };
