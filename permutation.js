//permutation function that takes in an input string and a pbox(array)
module.exports = (input, pbox) => {
  let output = "";
  for (let i = 0; i < pbox.length; i++) {
    output += input.charAt(pbox[i]);
  }
  return output;
}
