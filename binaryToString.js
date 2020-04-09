module.exports = inputBinaryString => {
  let text = "";
  //Split the string into smaller strings of length 8 characters
  let bits = inputBinaryString.match(/.{1,8}/g);
  for (var i = 0; i < bits.length; i++) {
    let unicode = parseInt(bits[i], 2).toString(10);

    let character = String.fromCharCode(unicode);
    text += character;
  }
  return text;
}
