const permutation = require('./permutation');
const pbox = require('./pbox');
const feistel = require('./feistel');

//This function takes an array of generated keys and 8bit plaintext
module.exports = (key, text) =>{
  //Performing IP
  let ip = permutation(text, pbox.initial);
  //First Feistel round
  let result = feistel(ip, key[0]);
  //Swapping the results
  result = permutation(result, pbox.swap);
  //Second Feistel round
  result = feistel(result, key[1]);
  //Performing IP inverse to obtain ciphertext
  let cipher = permutation(result, pbox.initialInverse);
  return cipher;
}
