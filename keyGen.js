const permutation = require('./permutation');
const pbox = require('./pbox');

module.exports = input => {
  let key = [];
  //Applying p10 function
  let p10 = permutation(input, pbox.p10);
  //Splitting into two halves
  let split = p10.match(/.{1,5}/g);
  //Applying LS-1
  split[0] = permutation(split[0], pbox.shift);
  split[1] = permutation(split[1], pbox.shift);
  //Applying p8 to get Key-1
  key.push(permutation(split[0] + split[1], pbox.p8));
  //Applying LS-2
  split[0] = permutation(split[0], pbox.shift);
  split[1] = permutation(split[1], pbox.shift);
  split[0] = permutation(split[0], pbox.shift);
  split[1] = permutation(split[1], pbox.shift);
  //Applying p8 to get Key-1
  key.push(permutation(split[0] + split[1], pbox.p8));
  return key;
}
