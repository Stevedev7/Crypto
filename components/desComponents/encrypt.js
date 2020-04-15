const permutation = require('./permutation');
const pbox = require('../tables/pbox');
const feistel = require('./feistel');
const complement = require('../other/complement');

//This function takes an array of generated keys and 8bit plaintext
module.exports = (key, text) =>{
  // first complement
  let complement1=complement(text);
  //Performing IP
  let ip = permutation(complement1, pbox.initial);
  //First Feistel round
  let result = feistel(ip, key[0]);
  //Swapping the results
  result = permutation(result, pbox.swap);
  //Second Feistel round
  result = feistel(result, key[1]);
  //Performing IP inverse to obtain ciphertext
  let complement2 = permutation(result, pbox.initialInverse);
  //complement second
  let cipher=complement(complement2);
  return cipher;
}
