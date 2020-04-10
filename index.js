const binary = require('./stringToBinary');
const encrypt= require('./encrypt');
const decrypt= require('./decrypt');
const keygen= require('./keyGen');
const string = require('./binaryToString');


const inputText = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz;"
const bin = binary(inputText);
let decryptedtext="";
let encryptedtext="";
let bits = bin.match(/.{1,8}/g);
// const bin = binary(inputText);
let key=keygen('1010000010');
console.log(bits);
bits.forEach(bit=>{
let cipher=encrypt(key,bit);
let plaintext=decrypt(key,cipher);
encryptedtext=encryptedtext+cipher;
decryptedtext=decryptedtext+plaintext;
console.log(cipher+" encrypted");
// console.log(string(cipher));
console.log(plaintext+" decrypted");
// console.log(string(plaintext));
});
// console.log(string(bin));
// console.log(convert);
console.log(encryptedtext);
console.log(string(encryptedtext));
console.log(decryptedtext);
console.log(string(decryptedtext));