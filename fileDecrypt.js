const fs = require('fs');
const keygen = require('./components/desComponents/keyGen');
const decrypt = require('./components/desComponents/decrypt');
const binary = require('./components/typeConvertion/stringToBinary');
const string = require('./components/typeConvertion/binaryToString');

//Ciphertext and keytext

const inputText = fs.readFileSync(process.argv[2], 'utf-8');
const keyText = process.argv[4];

//converting Ciphertext and keytext into binary
const binaryCiphertext = binary(inputText);
let keyBits = binary(keyText);

//Make the add additions bits to make it long enough
let flag = true;
while(keyBits.length % 10 != 0){
  flag = !flag;
  flag ? keyBits += '1' : keyBits += '0';
}

let decryptedText="";
let ciphertextBytes = binaryCiphertext.match(/.{1,8}/g);
let keyArray = keyBits.match(/.{1,10}/g);

//Key generation
var keyPairs = [];
keyArray.forEach(key => {
  keyPairs.push(keygen(key));
});
let x = '';
//Decrypting
for (let i = 0, j = 0; i < ciphertextBytes.length; i++, j = ++j % keyArray.length) {
  let key = keyPairs[j];
  decryptedText += decrypt(key, ciphertextBytes[i]);
}
//Write the Decrypted text to a file
fs.writeFileSync(process.argv[3], string(decryptedText), 'utf-8');
