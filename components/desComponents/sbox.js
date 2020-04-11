const pbox = require('../tables/pbox');

module.exports = input => {
  //Split the input
  let firstHalf = input.slice(0, 4);
  let secondHalf = input.slice(4);
  //Determin the row and column of first half
  let row = parseInt(firstHalf.charAt(0) + firstHalf.charAt(3), 2).toString(10);
  let col = parseInt(firstHalf.charAt(1) + firstHalf.charAt(2), 2).toString(10);
  //Determine the result o s0
  let result = pbox.s0[row][col];
  //Determin the row and column of second half
  row = parseInt(secondHalf.charAt(0) + secondHalf.charAt(3), 2).toString(10);
  col = parseInt(secondHalf.charAt(1) + secondHalf.charAt(2), 2).toString(10);
  //Determine the result o s1
  result += pbox.s1[row][col];
  return result;
}
