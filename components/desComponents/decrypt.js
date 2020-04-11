const permutation = require('./permutation');
const pbox = require('../tables/pbox');
const feistel = require('./feistel');

//This function takes an array of generated keys and 8bit ciphertext
module.exports = (key, text) =>{
  //Performing IP
  let ip = permutation(text, pbox.initial);
  //First Feistel round
  let result = feistel(ip, key[1]);
  //Swapping the results
  result = permutation(result, pbox.swap);
  //Second Feistel round
  result = feistel(result, key[0]);
  //Performing IP inverse to obtain plaintext
  let plaintext = permutation(result, pbox.initialInverse);
  return plaintext;
}
