const binary = require('./stringToBinary');
const encrypt= require('./encrypt');
const decrypt= require('./decrypt');
const keygen= require('./keyGen');
const string = require('./binaryToString');


const inputText = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz;"
const bin = binary(inputText);
let convert="";
let bits = bin.match(/.{1,8}/g);
// const bin = binary(inputText);
let key=keygen('1010000010');
console.log(bits);
bits.forEach(bit=>{
let cipher=encrypt(key,bit);
let plaintext=decrypt(key,cipher);
convert=convert+plaintext;
console.log(cipher+" encrypted");
console.log(plaintext+" decrypted");
});
// console.log(string(bin));
// console.log(convert);
console.log(string(convert));