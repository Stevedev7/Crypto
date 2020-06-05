const permutation = require('./permutation');
const pbox = require('../tables/pbox');
const complement = require('../other/complement');

module.exports = input => {
  let key = [];
  //Applying p10 function
  let p10 = permutation(input, pbox.p10);
  //complement first
  let complement1=complement(p10);
  //Splitting into two halves
  let split = complement1.match(/.{1,5}/g);
  //Applying LS-1
  split[0] = permutation(split[0], pbox.shift);
  split[1] = permutation(split[1], pbox.shift);
  //Applying p8 to get Key-1
  key.push(permutation(split[0] + split[1], pbox.p8));
  //complementing p10 again by complementing split[0,1]
  split[0]=complement(split[0]);
  split[1]=complement(split[1]);
  //Applying LS-2
  split[0] = permutation(split[0], pbox.shift);
  split[1] = permutation(split[1], pbox.shift);
  split[0] = permutation(split[0], pbox.shift);
  split[1] = permutation(split[1], pbox.shift);
  //Applying p8 to get Key-1
  key.push(permutation(split[0] + split[1], pbox.p8));
  return key;
}
