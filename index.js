const keygen = require("./components/desComponents/keyGen");
const encrypt = require("./components/desComponents/encrypt");
const binary = require("./components/typeConvertion/stringToBinary");
const string = require("./components/typeConvertion/binaryToString");
const decrypt = require("./components/desComponents/decrypt");

module.exports = {
  encrypt(plaintext, key = "Detroit Smash 42069") {
    const binaryPlaintext = binary(plaintext);
    let keyBinary = binary(key);
    let flag = true;
    while (keyBinary.length % 10 != 0) {
      flag = !flag;
      flag ? (keyBinary += "1") : (keyBinary += "0");
    }
    let encryptedText = "";
    let plainTextBytes = binaryPlaintext.match(/.{1,8}/g);
    let keyArray = keyBinary.match(/.{1,10}/g);

    //Key generation
    let keyPairs = [];
    keyArray.forEach((key) => {
      keyPairs.push(keygen(key));
    });
    let x = "";
    //Encrypting
    for (
      let i = 0, j = 0;
      i < plainTextBytes.length;
      i++, j = ++j % keyArray.length
    ) {
      let key = keyPairs[j];
      encryptedText += encrypt(key, plainTextBytes[i]);
    }
    return string(encryptedText);
  },
  decrypt(cipher, key = "Detroit Smash 42069") {
    const cipherBinary = binary(cipher);
    let keyBinary = binary(key);

    let flag = true;
    while (keyBinary.length % 10 != 0) {
      flag = !flag;
      flag ? (keyBinary += "1") : (keyBinary += "0");
    }

    let decryptedText = "";
    let ciphertextBytes = cipherBinary.match(/.{1,8}/g);
    let keyArray = keyBinary.match(/.{1,10}/g);

    //Key generation
    let keyPairs = [];
    keyArray.forEach((key) => {
      keyPairs.push(keygen(key));
    });
    let x = "";
    //Decrypting
    for (
      let i = 0, j = 0;
      i < ciphertextBytes.length;
      i++, j = ++j % keyArray.length
    ) {
      let key = keyPairs[j];
      decryptedText += decrypt(key, ciphertextBytes[i]);
    }
    return string(decryptedText);
  },
};
