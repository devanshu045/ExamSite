// console.log("jai ganesh")

const crypto = require("crypto")

const encryptObject = {};

const question = 'what is 2 + 2';
const Opt1 = 5;
const Opt2 = 6;
const Opt3 = 4;
const Opt4 = 2;

const encryptfun = (text,key,iv) => {
const algorithm = 'aes-256-cbc';
const ciphers =  crypto.createCipheriv(algorithm, key,iv);
var  str = ciphers.update(text,'utf8','hex');
str += ciphers.final('hex');
console.log(str);
return str;
}

const decryptfun = (encrupted,key,iv) => {
    const algorithm = 'aes-256-cbc';
    const decipher = crypto.createDecipheriv(algorithm,key,iv);
    var destr = decipher.update(encrupted,'hex','utf8');
    destr += decipher.final('utf8');
    console.log(destr);
}
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)
const checkque = encryptfun(question,key,iv);
decryptfun(checkque,key,iv);