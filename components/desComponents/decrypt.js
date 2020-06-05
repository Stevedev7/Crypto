const permutation = require('./permutation');
const pbox = require('../tables/pbox');
const feistel = require('./feistel');
const complement = require('../other/complement');

//This function takes an array of generated keys and 8bit ciphertext
module.exports = (key, text) =>{
  //complement first
  let complement1=complement(text);
  //Performing IP
  let ip = permutation(complement1, pbox.initial);
  //First Feistel round
  let result = feistel(ip, key[1]);
  //Swapping the results
  result = permutation(result, pbox.swap);
  //Second Feistel round
  result = feistel(result, key[0]);
  //Performing IP inverse to obtain plaintext
  let complement2 = permutation(result, pbox.initialInverse);
  //complement second
  let plaintext=complement(complement2);
  return plaintext;
}
