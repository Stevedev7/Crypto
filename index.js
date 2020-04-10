const binary = require('./stringToBinary');
const encrypt= require('./encrypt');
const decrypt= require('./decrypt');
const keygen= require('./keyGen');
const string = require('./binaryToString');

//Plaintext and keytext
const inputText = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,/\\=+-_:;\'\"{[(*&^%$#@!~\`<>)]}"
const keyText = "CrYPtoGRAphy";

//converting plaintext and keytext into binary
const binaryPlaintext = binary(inputText);
let keyBits = binary(keyText);

//Make the add additions bits to make it long enough
let flag = true;
while(keyBits.length % 10 != 0){
  flag = !flag;
  flag ? keyBits += '1' : keyBits += '0';
}

let decryptedText="";
let encryptedText="";
let plainTextBytes = binaryPlaintext.match(/.{1,8}/g);
let keyArray = keyBits.match(/.{1,10}/g);

//Key generation
var keyPairs = [];
keyArray.forEach(key => {
  keyPairs.push(keygen(key));
});
let x = '';
//Encrypting
for (let i = 0, j = 0; i < plainTextBytes.length; i++, j = ++j % keyArray.length) {
  let key = keyPairs[j];
  encryptedText += encrypt(key, plainTextBytes[i]);
}
//Printing the result
console.log(string(encryptedText));
//Splitting the cipher into bytes
let cipherBytes = encryptedText.match(/.{1,8}/g);

//Decrypting the cipher
for (let i = 0, j = 0; i < cipherBytes.length; i++, j = ++j % keyArray.length) {
  let key = keyPairs[j];
  decryptedText += decrypt(key, cipherBytes[i]);
}

console.log(string(decryptedText));
