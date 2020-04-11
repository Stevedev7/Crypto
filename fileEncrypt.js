const fs = require('fs');
const keygen = require('./components/desComponents/keyGen');
const encrypt = require('./components/desComponents/encrypt');
const binary = require('./components/typeConvertion/stringToBinary');
const string = require('./components/typeConvertion/binaryToString');

//Plaintext and keytext

const inputText = fs.readFileSync(process.argv[2], 'utf-8');
const keyText = process.argv[4];

//converting plaintext and keytext into binary
const binaryPlaintext = binary(inputText);
let keyBits = binary(keyText);

//Make the add additions bits to make it long enough
let flag = true;
while(keyBits.length % 10 != 0){
  flag = !flag;
  flag ? keyBits += '1' : keyBits += '0';
}

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
//Write to file
fs.writeFileSync(process.argv[3], string(encryptedText), 'utf-8');
