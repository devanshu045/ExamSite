// console.log("jai ganesh")
const sss = require('secrets.js-grempe');
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


// sss to divide that key so it can use at some time by some pepeole

const sharekey = sss.share(key.toString('hex'),5,3);


const selectshare = sharekey.slice(0,3)

const keycheck = sss.combine(selectshare);
const reconstructedKey = Buffer.from(keycheck, 'hex');

decryptfun(checkque,reconstructedKey,iv);

// console.log(keycheck);

