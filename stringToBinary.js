module.exports = inputCharater => {
  let binaryString = "";
  for(var i = 0; i < inputCharater.length; i++){
    //Converting a character to its unicode
    let unicode = inputCharater.charCodeAt(i);
    //Converting a hex to its binary value
    let bin = parseInt(unicode, 10).toString(2);
    //Converting it to 8 bits
    while(bin.length < 8){
      bin = '0' + bin;
    }
    binaryString += bin;
  }
  return binaryString;
}
