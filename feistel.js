const permutation = require('./permutation');
const pbox = require('./pbox');
const xor = require('./xor');
const sbox = require('./sbox');

//Feistel function perfo
module.exports = (input, key)=> {
  //Split the input into two halves
  let split = input.match(/.{1,4}/g);
  //Perform Expansion on the right half
  let ep = permutation(split[1], pbox.expansion);
  //XOR thw result with the key
  let result = xor(ep, key);
  //Perform s-box function
  result = sbox(result);
  //Perform P4 on result obtained
  let p4 = permutation(result, pbox.p4);
  //XOR it with the left half and concatinte with the right half
  result = xor(p4, split[0]) + split[1];
  return result;
}
